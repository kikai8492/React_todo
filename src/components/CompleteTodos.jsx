import React from "react";

const style = {
  backgroundColor: "rgb(255, 230, 0)",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
};

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div style={style}>
      <p className="title">完了のタスク</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
