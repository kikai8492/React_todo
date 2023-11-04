import React from "react";

const style = {
  backgroundColor: "aqua",
  width: "400px",
  height: "50px",
  padding: "8px",
  margin: "8px",
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div style={style}>
      <input placeholder="タスクを入力" value={todoText} onChange={onChange} />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
