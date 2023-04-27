import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const TaskForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  console.log(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value) return;
    const newTask = await addTodo(value);
    await console.log("NEW TASK ADDED", newTask);
    setValue("");
  };

  return (
    <Form className="todoForm" onSubmit={handleSubmit}>
      <Form.Label>
        <b className="formLabel">Add Todo</b>
      </Form.Label>
      <Form.Control
        type="text"
        className="input"
        placeholder="Add new todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TaskForm;
