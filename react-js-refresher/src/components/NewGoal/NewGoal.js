import React from "react";

import './NewGoal.css';

const NewGoal = (props) => {/* since now in App.js we pass onAddGoal prop to this component, we can expecting here props contains something -> React always passing props, worst case it's empty */
    const addGoalHandler = event => {/* will get event automatically, passed by React to the function */
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: 'My new Goal!'
        };

        props.onAddGoal(newGoal); // passing the newGoal dummy data to the funciton reference/pointer
    };
    
    return <form className="new-goal" onSubmit={addGoalHandler}>{/* only pass the function's pointer! no execution () here, React will handle the execution automatically
    FUN FACT: basically all is props, just one receives an Object (props), other receives a pointer to a function (event handler) */}
        <input type="text" />
        <button type="submit" >Add Goal</button>
    </form>
}

export default NewGoal;
