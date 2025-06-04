import logo from './logo.svg';
import './App.css';
import React from 'react';

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
// this is a tpye of Component -> can be an arrow function OR a JS class with a render method. React is all about components
const ExampleApp = () => {
  // return React.createElement('h1', {title: 'This works'}, 'Example React App');
  return <h1 title='This works'>Example React App</h1>; // => this is a JSX syntax, equivalent to the code above, JSX basically simplifies the syntax so you can write HTML code in a JS file then translates into commands like above
  // if this returns anything other than a JSX code, throws error
}

// this is the other type of Component  OLD WAY
// in modern React use functional/function based components only
class ExampleApp2 extends React.Component {
  render() {
    return <h1 title='This works'>Example React App</h1>;
  }
}

export {ExampleApp, ExampleApp2}

const ReactApp = () => {
  return <div className='course-goals'>
    {/* Inline comments looks like this in JSX code */}
    <h2>Course Goals</h2>
    <ul className='goal-list'>{/* class is a JS attribute keyword so JSX uses className */}
      <li>Finish the course</li>
      <li>Learn all about the Course Main Topic</li>
      <li>Help other students in the course Q&amp;A</li>
    </ul>
  </div>
}

export {ReactApp}
