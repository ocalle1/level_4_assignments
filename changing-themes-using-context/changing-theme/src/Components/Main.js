import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";



function Main(props){

    const context = useContext(ThemeContext);

    return(
        <>
        <div className={`${context.color}-theme`}>
            <div className="text">
<h1>Click the Button to toggle the {context.color} Theme!</h1>
</div>
<div className="button">
<button onClick={context.toggleTheme}>Toggle Theme</button>
</div>
        </div>
        </>
    )
}

export default Main;