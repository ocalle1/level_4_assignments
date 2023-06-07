import React, { createContext, useState } from 'react'
import axios from 'axios'



const AxiosContext = createContext();


function AxiosContextProvider(props) {

    const apiURL = "https://api.vschool.io/oscarc/thing"

    const [ugly, setUgly] = useState({
        title: "",
        imgUrl: "",
        description: ""
    });

    const [formInputs, setFormInputs] = useState({
        title: props.name,
        description: ""
    })
    const [arrUgly, setArrUgly] = useState([]);


    // const editCharacter = (id) =>{
    // console.log("editCharacter function was called")
    // }


    function getUglies() {
        axios.get(`${apiURL}`)// fetch request
            .then(res => {
                console.log(res.data, "getting data")
                setArrUgly(res.data)
            })
    }
    function postUglies() {
        axios.post(`${apiURL}`, {
            title: ugly.title,
            imgUrl: ugly.imgUrl,
            description: ugly.description
        })
            .then(res => {// adds info
                // console.log(res.data, "getting data")
                getUglies()
            })
    }

    function deleteUglies(id) {
        //axios delete request
        //concatenate id to the api url string
        console.log(id, "delete id")
        axios.delete("https://api.vschool.io/oscarc/thing/" + id)
        .then(()=>getUglies())
            //.then(res => console.log(res, "delete is working!!!"))
        }
    //create a put and delete API request
    return (
        <AxiosContext.Provider
            value={{
                // the createContext uses this on other pagers
                arrUgly, setArrUgly, ugly, setUgly, getUglies, postUglies, formInputs, setFormInputs, deleteUglies
            }}
        >
            {props.children}
        </AxiosContext.Provider>
    )
}


export { AxiosContext, AxiosContextProvider };