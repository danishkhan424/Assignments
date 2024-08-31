// import required modules
const express = require("express");
const multer = require("multer");

// create serve
const server = express();
// const port = 3000


// multer configuration
const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, 'uploads/')
    },
    filename : function(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({storage : storage})


server.get("/", (req, res) => {
  res.status(200).send({ message: "welcome to server" });
});

server.post("/upload", upload.single("avatar"), (req, res) => {
    // console.log(req.file);
    
  res.status(200).send({
    message: "file uploaded successfully"
  });
});


// server.listen(port, ()=>{
//     console.log(Server listening on port ${port});
// })
// export the server
module.exports = server;