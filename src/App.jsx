import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState(["aaaa", "bbbb"]);
  const [completeTodos, setCompleteTodos] = useState(["cccc"]);
  return (
    <>
      <div className="input-area">
        <input placeholder="タスクを入力" />
        <button>追加</button>
      </div>

      <div className="incomplete-area">
        <p className="title">未完了のタスク</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のタスク</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
