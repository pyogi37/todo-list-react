import "../style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import Task from "./Task";
import { Navbar, Card, Button } from "react-bootstrap";
import TaskForm from "./TaskForm";
import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/todos?userId=1";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setTasks(json))
      .then(() => console.log(tasks));
  }, []);

  const addTodo = () => {
    const newTask = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    return newTask;
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand> myTodo(s)</Navbar.Brand>
      </Navbar>
      <TaskForm addTodo={addTodo} />

      {tasks.map((task, id) => (
        <Card key={id}>
          <Card.Body>
            <Task task={task} id={id} />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default App;
