import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Task from "./components/Task";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          value: "Wake up at 5:00 AM"
        },
        {
          id: 2,
          value: "Go to the supermarket at 6:30 AM"
        }
      ]
    };
  }

  handleDelete = id => {
    const { tasks } = this.state;

    this.setState({ tasks: tasks.filter(task => task.id !== id && task) });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <ul className="collection with-header">
          <li className="collection-header">
            <h5>ToDo</h5>
          </li>
          {tasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              value={task.value}
              onDelete={this.handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
