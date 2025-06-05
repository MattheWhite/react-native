import React from "react"; // always necessary, without this we can't use JSX syntax

import './GoalList.css'; // styling import, separated only for leaner code. CSS always applied globally no matter where you import them, applied to the whole page

/* 
Different ways to define a component

function GoalList
const GoalList = function GoalList ...
const GoalList = () => {}
 */
const GoalList = (props) => { // every function used by React which returns JSX will receive parameters/props automatically
  // return statement in JSX code looks like this, prettier structuring with using () brackets
  console.log(props.goals); // props is an Object
  return (
    <ul className="goal-list">
      {/* class is a JS attribute keyword so JSX uses className */}

    </ul>
  );
};

export default GoalList;
