import React from "react";

export const IncompleteTodos = (prps) => {
  const { todos, onClickComplete, onClickDelete } = prps;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のタスク</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};