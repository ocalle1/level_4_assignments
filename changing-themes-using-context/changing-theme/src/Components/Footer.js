import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";



function Footer(props){

    const context = useContext(ThemeContext);

    return(
        <>
        <div className={`${context.color}-theme`}>
            <h5 className="footer">The amazing footer</h5>
        </div>
        </>
    )
}



export default Footer;