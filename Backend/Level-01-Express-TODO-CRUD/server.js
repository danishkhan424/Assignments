const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.get("/todos", (req, res) => {
  // Reading todos from db.json and send as response
  fs.readFile("db.json", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading db.json:", err);
      res.status(500).send("Internal Server Error");
    } else {
      try {
        const todos = JSON.parse(data).todos;
        res.send(todos); // Send todos
      } catch (parseError) {
        console.error("Error parsing JSON data from db.json:", parseError);
        res.status(500).send("Internal Server Error");
      }
    }
  });
  //   fs.readFile("db.json", "utf8", (err, data) => {
  //     if (err) {
  //       console.error(err);
  //       res.sendStatus(500);
  //     } else {
  //       res.json(data);
  //     }
  //   });
});

app.post("/todos", (req, res) => {
  // Adding new todo to db.json and send success response
  const newTodo = req.body;
  fs.readFile("db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      const todos = JSON.parse(data);
      todos.todos.push(newTodo);
      fs.writeFile("db.json", JSON.stringify(todos), (err) => {
        if (err) {
          console.error(err);
          res.sendStatus(500);
        } else {
          res.sendStatus(201);
        }
      });
    }
  });
});

app.put("/todos", (req, res) => {
  // Read the contents of db.json
  fs.readFile("db.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Internal server error");
      return;
    }

    // Parse JSON data into JavaScript object
      let todos = JSON.parse(data).todos;

    // Flag to check if any todo was updated
    let updated = false;

    // Update status of todos with even IDs from false to true
    todos.forEach((todo) => {
      if (todo.id % 2 === 0 && todo.status === false) {
        todo.status = true;
        updated = true;
      }
    });

    // Write updated todos data back to db.json if any todo was updated
    if (updated) {
      fs.writeFile("db.json", JSON.stringify({ todos }), "utf8", (err) => {
        if (err) {
          console.error("Error writing file:", err);
          res.status(500).send("Internal server error");
          return;
        }
        res.status(200).send("Todos status updated successfully");
      });
    } else {
      // No todos were updated
      res.status(404).send("No todos found with even ID and status false");
    }
  });
});

app.delete("/todos", (req, res) => {
  // Delete todos with status as true from db.json
  fs.readFile("db.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Internal server error");
      return;
    }

    // Parse JSON data into JavaScript object
    let todos = JSON.parse(data).todos;

 
    let deleted = false;

      if (todos.length > 1) {
          todos = todos.filter((todo) => todo.status !== true);
          deleted = true;
      }
    // Write updated todos data back to db.json if any todo was updated
    if (deleted) {
      fs.writeFile("db.json", JSON.stringify({ todos }), "utf8", (err) => {
        if (err) {
          console.error("Error writing file:", err);
          res.status(500).send("Internal server error");
          return;
        }
        res.status(200).send("Todos deleted successfully");
      });
    } else {
      // No todos were updated
      res.status(404).send("No todos found with even ID and status true to delete");
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
