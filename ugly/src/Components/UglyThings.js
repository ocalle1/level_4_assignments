import React, { useEffect, useContext, useState } from "react";
import { AxiosContext } from "../Context/AxiosContext";
import Card from "./Card";
import axios from "axios"

function UglyThings(props){


    const { arrUgly, setArrUgly, ugly, setUgly, getUglies, postUglies, formInputs} = useContext(AxiosContext);
    // console.log(arrUgly)

    const handleChange = (e) => { 
    e.preventDefault();
    const {name, value} = e.target
    setUgly(prevUglies =>({
        ...prevUglies,
        [name]:value
    }))
}

const handleSubmit = (e) => {
    e.preventDefault();
    postUglies();
    //props.editCharacter(props.id, formInputs)
}



const editCharacter = (id, update) => {
    //place axios put request here to update data from api

    axios.put("https://api.vschool.io/oscarc/thing/" + id, update)
    .then(res => console.log(res))
    //.then(() => getUglies())
    //getUglies()
    console.log("editCharacter function was called")
    console.log("editCharacer fuction is updating:", id, "with this update:", update)
    setArrUgly((prevArr) => {
return prevArr.map((arrUgly) => {
    if(arrUgly.id === id){
    return {
        ...arrUgly,
        name:update.title
    }
}
    else 
    return arrUgly
})
     })
   
}
    

useEffect(() =>{
    getUglies()

}, []);

//maps over title,description, imgUrl and displays to browser
let mappedList = arrUgly.map((info)=>{
    return(
        <ul key={info._id}>
              <Card {...info}
              id={info._id}
              data={arrUgly}
              imgUrl={info.imgUrl}
            editCharacter={editCharacter}
              />
          </ul>
      )
      })

    return(
        <>
         <form onSubmit={handleSubmit}>           
<input 
type="text"
name="title"
placeholder="Title"
value={ugly.title.value}
onChange={handleChange}
/>
<input 
name="imgUrl"
placeholder="Image URL"
value={ugly.imgUrl}
onChange={handleChange}
/>
<input 
name="description"
placeholder="Description"
value={ugly.description}
onChange={handleChange}
/>
<button>Submit</button>
        </form> 
       <div>
        {/* displays to browser mappedList */}
         {mappedList}
       </div>
       
        </>
    )
}
export default UglyThings;