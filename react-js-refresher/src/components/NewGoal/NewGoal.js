import React from "react";

import './NewGoal.css';

const NewGoal = () => {
    const addGoalHandler = event => {/* will get event automatically, passed by React to the function */
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: 'My new Goal!'
        };

        console.log(newGoal);
    };
    
    return <form className="new-goal" onSubmit={addGoalHandler}>{/* only pass the function's pointer! no execution () here, React will handle the execution automatically
    FUN FACT: basically all is props, just one receives an Object (props), other receives a pointer to a function (event handler) */}
        <input type="text" />
        <button type="submit" >Add Goal</button>
    </form>
}

export default NewGoal;
