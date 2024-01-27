import React, { useState } from "react";
import "./App.css";
import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    if (event.target.name === "task") {
      setFormState({
        ...formState,
        task: event.target.value,
      });
    }
    else if (event.target.name === "completed") {
      setFormState({
        ...formState,
        completed: event.target.checked,
      });
    }
    else {
      setFormState({
        ...formState,
        taskAssignedTo: event.target.value,
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    setTasks([...tasks, formState]);
    setFormState({
      task: "",
      completed: false,
      taskAssignedTo: "",
    })
  }
  function handleDelete(index){
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }
  function handleToggle(index) {
    const newTasks = [...tasks];
    console.log(newTasks);
    newTasks[index].completed = !newTasks[index].completed;
    console.log(newTasks);
    setTasks(newTasks);
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <input
            name="task"
            type="text"
            value={formState.task}
            onChange={handleChange}
            placeholder="Add Task"
          />
          <label>
            Completed:
            <input
              name="completed"
              checked={formState.completed}
              onChange={handleChange}
              type="checkbox"
            />
          </label>
          <select
            name="taskAssignedTo"
            onChange={handleChange}
            value={formState.taskAssignedTo}
          >
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      <table border="0" cellspacing="10" cellpadding="5">
        <thead>
          <tr>
            <th>TASKS</th>
            <th>COMPLETED</th>
            <th>ASSIGNEE</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item, index) => (
            <TaskItem
              key={index}
              item={item}
              handleDelete={() => handleDelete(index)}
              handleToggle={() => handleToggle(index)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
