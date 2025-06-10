import React, { useState } from "react";

import './NewGoal.css';

const NewGoal = (props) => {/* since now in App.js we pass onAddGoal prop to this component, we can expecting here props contains something -> React always passing props, worst case it's empty */
    const [enteredText, setEnteredText] = useState('');
    const addGoalHandler = event => {/* will get event automatically, passed by React to the function */
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: enteredText
        };

        console.log(newGoal);

        setEnteredText(''); // after enter clear out the input field
        
        props.onAddGoal(newGoal); // passing the newGoal dummy data to the funciton reference/pointer
    };

    const textChangeHandler = event => {
        setEnteredText(event.target.value); // event will hold the entered value of the input HTMLElement
    };
    
    return <form className="new-goal" onSubmit={addGoalHandler}>{/* only pass the function's pointer! no execution () here, React will handle the execution automatically
    FUN FACT: basically all is props, just one receives an Object (props), other receives a pointer to a function (event handler) */}
        <input type="text" value={enteredText} onChange={textChangeHandler} />{/* binding the changeEvent and the value too, so it reflects on every change, but for that a simple variable binding wont work, because that state are not handled so we have to use USESTATE hook to handle the binded variable'S state
        SO WE BINDING INPUT VALUE TO A VARIABLE AND UPDATE THAT VARIABLE ON EVERY KEY STROKE AND WE BIND BACK THAT VALUE */}
        <button type="submit" >Add Goal</button>
    </form>
}

export default NewGoal;
