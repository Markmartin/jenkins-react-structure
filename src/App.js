import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>jenkins auto build</p>
        <p>Move to site</p>
        <p>mv 替代 cp shell</p>
        <p>除了本体部署还添加了远程部署 远程部署文件夹remoteDir</p>
        <p>清除目标目录所有文件</p>
      </header>
    </div>
  );
}

export default App;
