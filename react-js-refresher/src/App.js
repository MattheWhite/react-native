import React, { useState } from "react";
import "./App.css";
import GoalList from "./components/GoalList/GoalList";
import NewGoal from "./components/NewGoal/NewGoal";
import logo from "./logo.svg";

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
  return <h1 title="This works">Example React App</h1>; // => this is a JSX syntax, equivalent to the code above, JSX basically simplifies the syntax so you can write HTML code in a JS file then translates into commands like above
  // if this returns anything other than a JSX code, throws error
};

// this is the other type of Component  OLD WAY
// in modern React use functional/function based components only
class ExampleApp2 extends React.Component {
  render() {
    return <h1 title="This works">Example React App</h1>;
  }
}

export { ExampleApp, ExampleApp2 };

const ReactApp = () => {
  const [courseGoals, setCourseGoals] = useState( // useState RETURNS:  [ latest state snapshot, function to handle changes ]
    // this function's signature is declared here -> what will be executed/rendered is passed to this function inside the Components body

    // first pass the INITIAL STATE
    [
      { id: "cg1", text: "Finish the course" },
      { id: "cg2", text: "Learn all about the Course Main Topic" },
      { id: "cg3", text: "Help other students in the course Q&A" },
    ]
  );
  // const courseGoals = ...; moved into useState to pass as the initial state

  const addNewGoalHandler = (newGoal) => {
    setCourseGoals(courseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      {/* Inline comments looks like this in JSX code */}
      <h2>Course Goals</h2>
      {/* outsource the component -> leaner structure 
          using props (properties) for passing data from components to another components, syntax is propName={variableName} => will hold the specified prop a reference to the object */}
      <NewGoal onAddGoal={addNewGoalHandler} />
      {/* onAddGoal is named here, could be anything, this is a prop too for passign down a function in this case from parent to child component, so the child component can use that for event handling
      But courseGoals is a simple JS Array, React ignores it, so we have to manage the STATE, so it will detect the change! For this import useState HOOK -> can be execute inside a FUNCTIONAL COMPONENT */}
      <GoalList goals={courseGoals} />
    </div>
  );
};

export { ReactApp };
