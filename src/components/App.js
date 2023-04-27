import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";

import Task from "./Task";
import { Navbar, Card } from "react-bootstrap";
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

  const addTodo = async (taskText) => {
    const newTask = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        title: taskText,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());

    await setTasks([newTask, ...tasks]);

    return newTask;
  };

  const removeTodo = async (id) => {
    await fetch("https://jsonplaceholder.typicode.com/todos/id", {
      method: "DELETE",
    });
    const newTasks = [...tasks];
    newTasks.splice(id, 1);
    setTasks(newTasks);
  };

  const markTodo = async (id, isComplete) => {
    await fetch("https://jsonplaceholder.typicode.com/posts/id", {
      method: "PATCH",
      body: JSON.stringify({
        completed: !isComplete,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    const newTasks = [...tasks];
    newTasks[id].completed = !isComplete;
    setTasks(newTasks);
  };

  const editTodo = async (id, title) => {
    await fetch("https://jsonplaceholder.typicode.com/posts/id", {
      method: "PATCH",
      body: JSON.stringify({
        title: title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    const newTasks = [...tasks];
    newTasks[id].title = title;
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand> myTodo(s)</Navbar.Brand>
      </Navbar>
      <div className="todoAppContainer">
        <TaskForm addTodo={addTodo} />

        <div className="todoContainer">
          {tasks.map((task, id) => (
            <Card key={id}>
              <Card.Body>
                <Task
                  task={task}
                  id={id}
                  removeTodo={removeTodo}
                  markTodo={markTodo}
                  editTodo={editTodo}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
