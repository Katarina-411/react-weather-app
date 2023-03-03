import "./App.css";
import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="App-body">
        <h1>Weather App</h1>
        <Search />
      </div>
      <footer className="App-footer">
        <p>
          This application was built using ReactJS{" "}
          <img src="./logo192.png" alt="React logo" class="App-logo" />
        </p>
        <span>
          <p>
            <a
              href="https://github.com/Katarina-411/react-weather-app.git"
              target="blank"
              rel="no-referrer"
            >
              Open-source code
            </a>{" "}
            by{" "}
            <a
              href="https://katarina-farkas.netlify.app/"
              target="blank"
              rel="no-referrer"
            >
              Katarina Farkas
            </a>
          </p>
        </span>
      </footer>
    </div>
  );
}
