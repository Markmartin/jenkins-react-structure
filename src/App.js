import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>jenkins auto build</p>
        <p>Move to site</p>
        <p>mv 替代 cp shell</p>
        <p>除了本体部署还添加了远程部署 远程部署文件夹remoteDir</p>
        <p>清除目标目录所有文件</p>
        <p>删除远程目标目录，并进行部署</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
