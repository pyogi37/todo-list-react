// import { useState } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";

const Task = ({ task, id, removeTodo, markTodo, editTodo }) => {
  const [editTaskMode, setEditTaskMode] = useState(false);
  const [taskText, setTaskText] = useState(task.title);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("do validate");
      editTodo(id, taskText);
      setEditTaskMode(!editTaskMode);
    }
  };

  return (
    <div className="todo">
      <span
        className="taskTitle"
        style={{ textDecoration: task.completed ? "line-through" : "" }}
        hidden={editTaskMode}
      >
        {task.title}
      </span>
      <span className="editTask">
        <input
          type="text"
          hidden={!editTaskMode}
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </span>

      <div className="buttons">
        <Button
          variant="outline-success"
          onClick={() => markTodo(id, task.completed)}
        >
          ✓
        </Button>{" "}
        <Button variant="outline-danger" onClick={() => removeTodo(id)}>
          ✕
        </Button>
        <Button
          variant="outline-warning"
          onClick={() => {
            setTaskText(task.title);
            setEditTaskMode(!editTaskMode);
          }}
        >
          ✍
        </Button>
      </div>
    </div>
  );
};

export default Task;
