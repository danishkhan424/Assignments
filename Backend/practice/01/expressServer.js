const express = require("express")
const fs = require("fs")
const server = express()
const port = 8080
server.use((express.json()))

server.get("/", (req, res) => {
    console.log("home");
    res.send("Home Page")    
})
server.get("/profile", (req, res) => {
    console.log("profile");
    res.send("Profile Page")
})
server.get("/userData", (req, res) => {
    console.log("user data");
    res.send("this is user's Data")

})
server.get("/file",  (req, res) => {
    console.log(req.method);
    fs.readFile("file.txt", "utf-8", (err, data) => {
        if(err) {
            res.send("file not found")
        } else {
            res.setHeader("Content-Type", "text/plain");
            res.send(data)
        }
    })
})

// server.use((req, res, next) => {
//     console.log("page not found");
//     res.send("404 page not found")
// })
server.listen(port, () => {
    console.log(`server is running on port ${port}`)
})