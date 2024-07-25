/*
Topics Covered:
        
    HTTP Protocol
    Node.js http and path Modules
    Dynamic Content Generation
    File System Operations


Your task is to develop a dynamic file server that:

Provides a directory listing on the root URL (/), displaying all files and folders with appropriate icons (folders: , files: ).
Enables navigation into nested directories through URL paths, dynamically generating listings for each directory visited.
Serves actual file contents when a file is accessed directly.
Returns a "404 Not Found" error for requests to non-existent directories or files.
Utilizes the Node.js path module to correctly navigate filesystem paths based on URL routes.
Hints:

For the UI, manipulate <li> tags to include the Unicode HTML-code for folders and files, enhancing the visual presentation.
Dynamically generate HTML to display directory contents with proper icons and anchor tags for navigation.
Examples:
Accessing / displays a list of all directories and files in the root, with icons indicating type (directory or file):
!https://i.imgur.com/8Msqzs7.png

Accessing /__tests__ shows the contents of the __tests__ directory with appropriate icons:
!https://i.imgur.com/l2s6vlu.png

Navigating to /__tests__/other dynamically generates a listing for the other directory inside __tests__:
!https://i.imgur.com/LZki7ht.png
*/

const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

//  isplaying all files and folders with appropriate icons (folders: , files: ).

app.get("/", (req, res) => {
  fs.readdir("./", (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      const html = files
        .map((file) => {
          const filePath = path.join("./", file);
          const stat = fs.statSync(filePath);
          const icon = stat.isDirectory() ? `📂` : `🗄️`;
          return `<li><a href="${file}">${icon} ${file}</a></li>`;
        })
        .join("");
      res.send(`<ul>${html}</ul>`);
    }
  });
});

app.get("/:file", (req, res) => {
  const filePath = path.join("./", req.params.file);
  fs.stat(filePath, (err, stat) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else if (stat.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        if (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
        } else {
          const html = files
            .map((file) => {
              const fileUrl = path.join(req.params.file, file);
              const icon = stat.isDirectory() ? `📂` : `🗄️`;
              return `<li><a href="${fileUrl}">${icon} ${file}</a></li>`;
            })
            .join("");
          res.send(`<ul>${html}</ul>`);
        }
      });
    } else {
      res.sendFile(filePath);
    }
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});