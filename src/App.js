import Search from "./Search";
import Temperature from "./Temperature";
import Image from "./Image";
import Observations from "./Observations";
import City from "./City";
import Date from "./Date";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <Search />
          <div className="overview">
            <div className="row">
              <div className="col">
                <div className="clearfix main-weather">
                  <Temperature />
                  <Image />
                </div>
              </div>
              <div className="col">
                <Observations />
              </div>
            </div>
            <City />
            <Date />
          </div>
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
