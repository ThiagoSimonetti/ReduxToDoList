import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addTodo,
  clearAllTasks,
  toggleToDo,
  deleteTasks,
} from "./redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    ToDoProp: state.ToDo,
  };
};

const mapDispatchToProps = {
  addTodo,
  clearAllTasks,
  toggleToDo,
  deleteTasks,
};

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: "",
    };
  }

  handleSubmit() {
    if (this.state.todoInput.length > 0) {
      this.props.addTodo(this.state.todoInput);
    }

    this.setState({ todoInput: "" });
  }

  render() {
    return (
      <div className="App">
        <h1>Redux To Do List</h1>
        <ul>
          {this.props.ToDoProp.todo.map((task, index) => {
            console.log("task", task);
            return (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={task.complete}
                  onChange={() => this.props.toggleToDo(index)}
                />
                {task.activity}
              </li>
            );
          })}

          <div className="AddField">
            <input
              type="text"
              onChange={(e) => this.setState({ todoInput: e.target.value })}
              value={this.state.todoInput}
            />
            <div>
              <button onClick={() => this.handleSubmit()}>Add Task</button>
              <button onClick={() => this.props.deleteTasks()}>
                Remove Completed
              </button>
              <button onClick={() => this.props.clearAllTasks()}>
                Empty List
              </button>
            </div>
          </div>
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
