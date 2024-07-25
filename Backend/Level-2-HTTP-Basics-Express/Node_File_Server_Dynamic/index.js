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