import React from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../Data";



function Services(){

const navigate = useNavigate();

const service = data.map( services =>(
    <Link key={services._id} to={`/services/${services._id}`}>{services.name}</Link> 


    // <div key={services._id}>
    // </div>
    
))

    return(
        <>
        <h1>Services</h1>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate(-1)}>Go backwards</button>
        <button onClick={() => navigate(1)}>Go forward 1</button>

        <div>
            {service}
        </div>
        </>
    )
};



export default Services;