/*Add functionality to update and delete tasks.
Ensure your application handles these operations correctly, keeping in mind the principles of immutable state updates.
There should be two buttons Delete Task and Toggle Task in TaskItem component
Clicking on Delete Task should delete that taskitem from tasks array
Clicking on Toggle Task should update the task completed status in tasks array thereby reflecting the same onto UI
Have different text color for completed and incompleted tasks*/ 


function TaskItem({ key, item, handleDelete, handleToggle }) {
    const style = {
        textDecoration: item.completed ? "line-through" : "none",
        backgroundColor: item.completed ? "#999999" : "white"
    }
    const btncolor = {
        color : item.completed ? "white" : "black",
        backgroundColor: item.completed ? "#999999" : "#fff"
    }

  return (
    <tr key={key} style={style}>
      <td>{item.task}</td>
      <td>{item.completed ? "Completed" : "Not Completed"}</td>
      <td>{item.taskAssignedTo}</td>
      <td>
        <button onClick={handleDelete} style={btncolor}>
          Delete Task
        </button>
      </td>
      <td>
        <button onClick={handleToggle} style={btncolor}>
          {item.completed ? "Mark Not Completed" : "Mark Completed"}
        </button>
      </td>
    </tr>
  );
}

export default TaskItem