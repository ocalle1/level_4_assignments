import React from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../Data";//params 1



function Services(){
// useNavigate is to navigate through the pages with the button created below
const navigate = useNavigate();

const service = data.map(services =>( //params 2
     <h2 key={services._id}> {/* params 3 */}
        {/* For each _id it creates a link for each product */}
    <Link  to={`/services/${services._id}`}>{services.name}</Link> 
</h2> 
))

    return(
        <>
        <h1>Services</h1>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate(-1)}>Go backwards</button>
        <button onClick={() => navigate(1)}>Go forward 1</button>

        <div>
            {/* Links are displayed */}
            {service}
        </div>
        </>
    )
};



export default Services;