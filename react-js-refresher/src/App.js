import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

// understanding JSX
const ExampleApp = () => {
  // return React.createElement('h1', {title: 'This works'}, 'Example React App');
  return <h1 title='This works'>Example React App</h1>; // => this is a JSX syntax, equivalent to the code above, JSX basically simplifies the syntax so you can write HTML code in a JS file then translates into commands like above
}

export {ExampleApp}
