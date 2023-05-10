import React from "react";

import { useParams } from "react-router-dom";
import data from "../Data";



function ServiceDetails() {

    const { id } = useParams();
console.log(id, "I work")
    const found = data.find(services => services._id === id);
console.log(found)
    return (
        <div>
            
            
            <h1>Serice Detail Page</h1>
            <h3> {found.name} - ${found.price}</h3>
            <p>{found.description}</p>
        </div>
    )
};



export default ServiceDetails;