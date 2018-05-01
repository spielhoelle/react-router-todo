import React, { Component } from "react";
import PostList from "./PostList";
import CreatePost from "./CreatePost";
import "./App.css";

class App extends Component {
  state = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    filteredTodos: JSON.parse(localStorage.getItem("filteredTodos")) || []
  };

  componentDidMount() {
  }

  addToDo = todoText => {
    const todos = [...this.state.todos];
    console.log(todos);
    todos.push({ text: todoText, created: Date.now(), done: false });
    this.setState({ todos, filteredTodos: [] });
    console.log(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  deleteToDo = todoID => {
    const todos = [...this.state.todos];
    const index = todos.findIndex(todo => todo.created === todoID);
    todos.splice(index, 1);
    this.setState({ todos });
    localStorage.setItem("todos", JSON.stringify(todos));

  };

  markAsDone = todoID => {
    const todos = [...this.state.todos];
    const index = todos.findIndex(todo => todo.created === todoID);
    todos[index].done = !todos[index].done;
    this.setState({ todos });
        localStorage.setItem("todos", JSON.stringify(todos));

  };

  searchBtn = todoText => {
    const todos = [...this.state.todos];
    const filteredTodos = todos.filter(i => i.text.includes(todoText));
    this.setState({ filteredTodos });
    localStorage.setItem("filteredTodos", JSON.stringify(filteredTodos));

  };

  // moves items in todolist up or down depending on "direction" parameter
  moveItem = (todoID, direction) => {
    const todos = [...this.state.todos];
    const index = todos.findIndex(todo => todo.created === todoID);
    const [todoItem] = todos.splice(index, 1);
    if (direction === "up") todos.splice(index - 1, 0, todoItem);
    else todos.splice(index + 1, 0, todoItem);
    this.setState({ todos });
    localStorage.setItem("todos", JSON.stringify(todos));

  };

  render() {
    return (
      <div className="container">
        <h1>TODO - List</h1>
        <CreatePost addToDo={this.addToDo} searchBtn={this.searchBtn} />
        <PostList
          todoList={
            this.state.filteredTodos.length > 0
              ? this.state.filteredTodos
              : this.state.todos
          }
          deleteToDo={this.deleteToDo}
          markAsDone={this.markAsDone}
          moveItem={this.moveItem}
        />
      </div>
    );
  }
}

export default App;
