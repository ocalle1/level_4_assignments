import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";


function Navbar(props){

    const context = useContext(ThemeContext);

    return(
        <>
        <div className={`${context.color}-theme`}>
            <div className="navbar">
            <a href="https://scrimba.com/scrim/cz9dLMTe?pl=pdYwXtr">Home</a>
            <a href="https://scrimba.com/scrim/cz9dLMTe?pl=pdYwXtr">About</a>
            <a href="https://scrimba.com/scrim/cz9dLMTe?pl=pdYwXtr">Contact</a>
            </div>
        </div>
        </>
    )
}



export default Navbar;