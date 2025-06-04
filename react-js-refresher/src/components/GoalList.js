import React from "react"; // always necessary, without this we can't use JSX syntax

import './GoalList.css'; // styling import, separated only for leaner code

/* 
Different ways to define a component

function GoalList
const GoalList = function GoalList ...
const GoalList = () => {}
 */
const GoalList = () => {
  // return statement in JSX code looks like this, prettier structuring with using () brackets
  return (
    <ul className="goal-list">
      {/* class is a JS attribute keyword so JSX uses className */}
      <li>Finish the course</li>
      <li>Learn all about the Course Main Topic</li>
      <li>Help other students in the course Q&amp;A</li>
    </ul>
  );
};

export default GoalList;
