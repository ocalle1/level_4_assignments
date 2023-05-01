import React, { useEffect, useContext } from "react";
import { AxiosContext } from "../Context/AxiosContext";
import Card from "./Card";

function UglyThings(){

    const { arrUgly, setArrUgly, ugly, setUgly, getUglies, postUglies} = useContext(AxiosContext);
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
}

useEffect(() =>{
    getUglies()

}, []);

let mappedList = arrUgly.map((info)=>{
      return(
          <ul key={info._id}>
              <Card {...info}
              id={info.id}
              data={arrUgly}
              imgUrl={info.imgUrl}
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
         {mappedList}
       </div>
       
        </>
    )
}
export default UglyThings;



















// ****************The data of ugly things should be managed by React Context, Only the array of ugly things, and functions for manipulating it, needs to be managed in context***************
// import React, { useEffect, useState } from "react";
// import axios from 'axios'



// const UglyContext = React.createContext();//lets Componenets receive info from disant parnet without passing it as props

// function UglyThingsProvider(props) {
//     // Updates the 3 properties
//     const [ugly, setUgly] = useState({
//         title: "",
//         imgUrl: "",
//         description: ""
//     })

//     // Empty Array where new info will display
//     const [uglyList, setUglyList] = useState([])
   
//     // For Asyncronysation using axios; will post to API and then we will have to GET from API to display
//     const createNewThing = async () => {
//         const apiUrl = "https://api.vschool.io/oscarc/thing"
//         const data = {
//             title: "My New Thing",
//             imgUrl: "https://example.com/my-image.jpg",
//             description: "New Thing Created With API"
//         };
//         try {
//             const response = await axios.post(apiUrl, data);//await/axios used to make code readable and to handle errors
//             console.log(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     useEffect(() => {
//         createNewThing();
//     })

//     const fetchThings = async () => {
//         const apiUrl = "https://api.vschool.io/oscarc/thing";
//         try {
//             const response = await axios.get(apiUrl);
//             const things = response.data;
//             const titles = things.map(thing => thing.title);
//             const imgUrls = things.map(thing => thing.imgUrl);
//             const descriptions = things.map(thing => thing.description);
//             console.log(titles, imgUrls, descriptions);
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         fetchThings();
//     })

//     //when user input changes the value this targets and creates the change.
//     function handleChange(event) {
//         const { name, value } = event.target;
//         setUgly(prevState => ({
//             ...prevState,
//             [name]: value
//         }))
//     }

//     function handlSubmit(event) {
//         event.default();
//         setUglyList(...prevState => [...prevState, ugly]);// adds current ugly object to the list of uglies
//         //resets form inputs
//         setUgly({
//             title: "",
//             imgUrl: "",
//             description: ""
//         })
//     }

//     return (//Where the values are accessable to any Components
//         <UglyContext.Provider value={{
//             ugly: ugly,
//             uglyList: uglyList,
//             handleChange: handleChange,
//             handlSubmit: handlSubmit
//         }}>
//             {props.children}
//         </UglyContext.Provider>
//     )
// }



// export { UglyContext, UglyThingsProvider };