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

    const [arrUgly, setArrUgly] = useState([]);

    function getUglies() {
        axios.get(`${apiURL}`)// fetch request
            .then(res => {
                // console.log(res.data, "getting data")
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

    return (
        <AxiosContext.Provider
            value={{
                arrUgly, setArrUgly, ugly, setUgly, getUglies, postUglies
            }}
        >
            {props.children}
        </AxiosContext.Provider>
    )
}


export { AxiosContext, AxiosContextProvider };