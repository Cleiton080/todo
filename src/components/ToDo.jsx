import React, { Component } from "react";
import Task from "./Task";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  handleDelete = id => {
    const { tasks } = this.state;
    this.setState({ tasks: tasks.filter(task => task.id !== id && task) });
  };

  handleAddiction = () => {
    const { tasks } = this.state;
    const input = document.getElementById("input-task");

    if (input.value.trim() !== "") {
      tasks.push({
        id: tasks.length + 1,
        value: input.value
      });
      this.setState({ tasks });
    }

    input.value = "";
  };

  title() {
    const { app } = this.props;
    return (
      <li className="collection-header">
        <h5>{app}</h5>
      </li>
    );
  }

  input() {
    return (
      <li className="collection-item">
        <input
          type="text"
          id="input-task"
          style={{border: "none", margin: 0 }}
          placeholder="Enter a todo here..."
          onBlur={this.handleAddiction}
        />
      </li>
    );
  }

  render() {
    const { tasks } = this.state;

    return (
      <div>
        <ul className="collection with-header">
          {this.title()}
          {tasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              value={task.value}
              onDelete={this.handleDelete}
            />
          ))}
          {this.input()}
        </ul>
      </div>
    );
  }
}

export default ToDo;
