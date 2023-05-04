import React, { useState, useContext} from 'react'
import { AxiosContext } from '../Context/AxiosContext'

const Card = (props) => {
//bring PUT and DELETE API request here
    const {formInputs ,setFormInputs, deleteUglies} = useContext(AxiosContext)

    const [isEditOn, setIsEditOn] = useState(false)

// const [formInputs, setFormInputs] = useState({
//     title: "" ,
//     description:""
// })

const handleChange = (e)=>{
    const {name, value} = e.target
    setFormInputs(prev => {
        return {
            ...prev,
            [name]:value
        }
    })
}

const handleSubmit =(e)=>{
    e.preventDefault();
    // console.log("form was submitted")
    // console.log(formInputs)
 
    props.editCharacter(props.id, formInputs)
 
}

    //helper function - edit button
    const toggleEdit = () => {
        setIsEditOn(prev => !prev)
    }

    const [card, setCard] = useState({
        title: props.title,
        imgUrl: props.imgUrl,
        description: props.description
    });

    return (
        <div>
            {isEditOn ?
                <form onSubmit={handleSubmit}>
                    <input value={formInputs.title} name="title" onChange={handleChange}/>
                    <input value={formInputs.description} name="description" onChange={handleChange}/>

                    <button type='submit'>submit</button>
                </form>
                :  
                <div>
                    <h1>{card.title}</h1> 
                    <p>{card.description}</p>
                </div>
            }

            {/* {isEditOn ?
                <form onSubmit={handleSubmit}>
                <input value={formInputs.description} name="description" onChange={handleChange}/>
                <button type='submit'>submit</button>
                
                </form>
                :  
            } */}

            <li key={props.id}
                id={props.id}
            >
                <img src={card.imgUrl} alt='images' />
            </li>
            <button onClick={toggleEdit}>{isEditOn ? "close" :"Edit"}</button>
        <button onClick={() => deleteUglies(props.id)}>Delete</button>
        </div>
    )

}
export default Card;