import "./App.css";
import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App container">
      <Search />
      <footer className="App-footer">
        <p>
          This application was coded by{" "}
          <a
            href="https://katarina-farkas.netlify.app/"
            target="blank"
            rel="no-referrer"
          >
            Katarina Farkas
          </a>{" "}
          using ReactJS{" "}
          <img src="./logo192.png" alt="React logo" class="App-logo" />
        </p>
        <p>
          {" "}
          and is{" "}
          <a
            href="https://github.com/Katarina-411/react-weather-app.git"
            target="blank"
            rel="no-referrer"
          >
            open-sourced on GitHub
          </a>{" "}
        </p>
      </footer>
    </div>
  );
}
