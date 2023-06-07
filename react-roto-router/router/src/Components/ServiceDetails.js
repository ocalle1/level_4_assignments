import React from "react";

import { useParams } from "react-router-dom";//params 1
import data from "../Data"; //params 3



function ServiceDetails() {
//Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path> which is path="/services/:id"
    const { id } = useParams(); //params 2
console.log(id, "I work")
//.find to look for id of services/product then assigns to variable found
    const found = data.find(services => services._id === id); //params 4
console.log(found)
    return (
        <div>
            
            
            <h1>Serice Detail Page</h1>
            <h3> {found.name} - ${found.price}</h3>{/* params 5 */}
            <p>{found.description}</p> {/* params 5 */}
        </div>
    )
};



export default ServiceDetails;