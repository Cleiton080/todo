import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  handleCheckbox = () => {
    let { done } = this.state;
    done = !done;
    this.setState({ done });
  };

  render() {
    const { value } = this.props;
    return (
      <React.Fragment>
        <li className="collection-item">
          <label>
            <input
              type="checkbox"
              className="filled-in"
              onChange={this.handleCheckbox}
            />
            <span>{value}</span>
          </label>
          <a href="#!" className="secondary-content">
            <i className="material-icons">delete</i>
          </a>
        </li>
      </React.Fragment>
    );
  }
}

export default Task;
