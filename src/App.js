import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <div>
        {" "}
        <footer>
          <p>
            This app was coded by Kasia, is open-sourced on{" "}
            <a href="https://github.com/kas-neu/my-react-app" target="_blank">
              Github
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://kas-weatherapp-react.netlify.app/?"
              target="_blank"
            >
              {" "}
              Netlify
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
