//  import required modules from nodejs and build the server
const validator = require("./middlewares/validator");
const express = require("express");

// create server
const port = 3000;
const server = express();

// use middleware here
server.use(express.json());
server.use(validator);

server.post("/", (req, res) => {
  console.log(req.body);
  res.send("Data added successfully");
});

// run server
// server.listen(port, ()=> {
//     console.log(Server is running at ${port});
// })

// export the server
module.exports = server;
