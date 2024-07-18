const express = require("express")
const app = express()
const port = 3000
const fs = require("fs")

app.use(express.json())

// GET request
app.get("/todos", (req,res)=>{

  fs.readFile("db.json", "utf8", (err, data) => {
    if(err){
      res.status(500).send("Internal Server Error")
    } else {
      res.status(200).send(data)
    }
  })
})
// POST request
app.post("/addtodo", (req,res)=>{

  fs.readFile("db.json", "utf8", (err, data) => {
    if (err){
      res.status(500).send("Internal Server Error")
    }
    const todos = JSON.parse(data).todos
    const newtodo = req.body;
    newtodo.id = todos.length + 1
    todos.push(newtodo)
    fs.writeFile("db.json", JSON.stringify({todos: todos}), (err) => {
      if(err){
        res.status(500).send("Internal Server Error")
      } else {
        res.status(201).send("Todo added successfully")
      }
    })
  })
})

// PUT request
app.put("/todos", (req,res)=>{
  fs.readFile("db.json", "utf8", (err,data)=>{
    if(err){
      res.status(500).send("Internal Server Error")
    } else {
      const todos = JSON.parse(data).todos
      
      let updated = false
      todos.forEach((todo)=>{
        if(todo.id % 2 === 0 && todo.status === false){
          todo.status = true
          updated = true
        }
      })
      if(updated){
        fs.writeFile("db.json", JSON.stringify({todos}), (err) => {
          if(err){
            res.status(500).send("Internal Server Error")
          } else {
            res.status(200).send("Todo updated successfully")
          }
        })
      } else {
        res.status(404).send("Todo not found")
      }
    }
  })
})

// DELETE request
app.delete("/todos", (req,res)=>{
  fs.readFile("db.json", "utf8", (err,data)=>{
    if(err){
      res.status(500).send("Internal Server Error")
    } else {
      let todos = JSON.parse(data).todos
      let deleted = false
      todos.forEach((todo)=>{
        if (todos.length > 1) {
          todos = todos.filter((todo) => todo.status !== true);
          deleted = true;
      }
      })
      if(deleted){
        fs.writeFile("db.json", JSON.stringify({todos}), (err) => {
          if(err){
            res.status(500).send("Internal Server Error")
          } else {
            res.status(200).send("Todo deleted successfully")
          }
        })
      } else {
        res.status(404).send("Todo not found")
      }
    }
  })
})


app.listen(port, ()=>{
  console.log(`Server listening on port ${port}`)
})