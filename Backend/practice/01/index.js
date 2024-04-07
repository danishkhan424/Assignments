const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>Home</h1>");
      res.end();
    } else if (req.url === "/profile") {
      res.setHeader("Content-Type", "text/html");
      res.write("<h1>Profile</h1>");
      res.end();
    } else if (req.url === "/userData") {
      res.setHeader("Content-Type", "text/html");
      res.write("this is user's Data");
      res.end();
    } else if (req.url === "/file") {
      fs.readFile("file.txt", (err, data) => {
        if (err) {
          res.end("file not found");
        } else {
          res.end(data);
        }
      });
    } else {
      res.end("page not found");
    }
  })
  .listen(3000, () => {
    console.log("server is running on port 3000");
  });
