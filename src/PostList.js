import React from "react";
import ToDoItem from "./ToDoItem";

const PostList = props => (

  <div className="">
      {props.todoList.length ?
        (<ul className="collection">
          {props.todoList.map((todo, i) => (
              <ToDoItem
                key={todo.created}
                todoList={props.todoList}
                todoText={todo.text}
                deleteToDo={props.deleteToDo}
                created={todo.created}
                markAsDone={props.markAsDone}
                done={todo.done}
                index={i}
                moveItem={props.moveItem}
              />
            ))}
          </ul>) : (
            <span>nothing here</span>
          )
        }
  </div>
);

export default PostList;
