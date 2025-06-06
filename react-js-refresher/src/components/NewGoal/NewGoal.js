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
    
    return <form className="new-goal" onSubmit={addGoalHandler}>{/* only pass the function's pointer! no execution () here, React will handle the execution automatically */}
        <input type="text" />
        <button type="submit" >Add Goal</button>
    </form>
}

export default NewGoal;
