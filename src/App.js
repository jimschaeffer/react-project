import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Is this working?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a><br></br>
        <heading><h2>This is a heading.</h2></heading>
        <p>and another paragraph element.</p>
        <ul>
          <li>ul item 1</li>
          <li>ul item 2</li>
          <li>ul item 3</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
