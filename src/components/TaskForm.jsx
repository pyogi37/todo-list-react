import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const TaskForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  console.log(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          placeholder="Add new todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TaskForm;
