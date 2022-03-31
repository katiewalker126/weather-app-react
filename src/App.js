import Search from "./Search";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Search defaultCity="London" />
          <footer>
            <div className="footer-signature">
              <a
                href="https://github.com/katiewalker126/react-weather-app.git"
                target="_blank"
                rel="noreferrer"
                className="github-link"
              >
                Open-source code
              </a>{" "}
              by Katie Walker
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
