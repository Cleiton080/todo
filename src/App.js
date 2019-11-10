import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Task from "./components/Task";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul className="collection with-header">
          <li className="collection-header">
            <h5>ToDo</h5>
          </li>
          <Task value="Wake up at 5:00 AM" />
          <Task value="Study javascript" />
          <Task value="Study english" />
        </ul>
      </div>
    );
  }
}

export default App;
