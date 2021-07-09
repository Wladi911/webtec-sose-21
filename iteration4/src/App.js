import logo from './Logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Willkomen auf unserer Website!</h1>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> Hallo React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
