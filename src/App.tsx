import React from "react"
import logo from "./logo.svg"
import "./App.css"

function App() {
  const a = 1
  const b = 2
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <ul>
          <li>Apple</li>
          <li>Banana</li>
          <li>Orange</li>
        </ul>

        <h1 data-testid="mytestid">Hello</h1>
        <span title="sum">{a + b}</span>
      </header>
    </div>
  )
}

export default App
