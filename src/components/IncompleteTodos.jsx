import React from "react";

const style = {
  backgroundColor: "rgb(0, 255, 13)",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
};

export const IncompleteTodos = (prps) => {
  const { todos, onClickComplete, onClickDelete } = prps;
  return (
    <div style={style}>
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
