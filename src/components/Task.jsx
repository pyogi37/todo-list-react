import { useState } from "react";
import { Button } from "react-bootstrap";

const Task = ({ task, id }) => {
  // const handleClick = () => {};
  // const [istaskCompleted, setIsTaskCompleted] = useState(false);
  return (
    <div className="todo">
      <span style={{ textDecoration: task.completed ? "line-through" : "" }}>
        {task.title}
      </span>
      <div>
        <Button variant="outline-success">✓</Button>{" "}
        <Button variant="outline-danger">✕</Button>
      </div>
    </div>
  );
};

export default Task;
