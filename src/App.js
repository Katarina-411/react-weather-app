import "./App.css";
import "./styles.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Search />
      </header>
      <footer className="App-footer">
        <a
          href="https://github.com/Katarina-411/react-weather-app.git"
          target="blank"
          rel="no-referrer"
        >
          Open-source code
        </a>
        <span> by Katarina Farkas</span>
      </footer>
    </div>
  );
}

export default App;
