import React from "react";
import "./ToDoItem.css";

const ToDoItem = props => (
  <li className={`collection-item todo-item ${props.done && " grey-text grey lighten-3"}`}>
    <button
      className={`blue waves-effect waves-light btn btn-small todo-delete  ${props.done ? " grey" : " blue"}`}
      onClick={() => props.markAsDone(props.created)}
    >
      {`${props.done ? " done" : " open"}`}
    </button>
    <span> {props.todoText}</span>
    <div className="todo-item-buttons">
      <i
        className="material-icons"
        onClick={() => props.deleteToDo(props.created)}
      >
        delete
      </i>
      {props.index !== props.todoList.length - 1 ? (
        <i
          className="material-icons"
          onClick={() => props.moveItem(props.created, "down")}
        >
          arrow_downward
        </i>
      ) : null}
      {props.index ? (
        <i
          className="material-icons"
          onClick={() => props.moveItem(props.created, "up")}
        >
          arrow_upward
        </i>
      ) : null}
    </div>
  </li>
);

export default ToDoItem;
