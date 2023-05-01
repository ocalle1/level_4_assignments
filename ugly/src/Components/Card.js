import React, {useState, useContext} from 'react'
import { AxiosContext } from '../Context/AxiosContext'




const Card = (props) => {

const [card, setCard] = useState({
    title: props.title,
    imgUrl: props.imgUrl,
    description: props.description
});

return(
    <div>
        <li key={props.id}
        id={props.id}
        >
        <img src={card.imgUrl} alt='images'/>
        <h1>{card.title}</h1>
        <p>{card.description}</p>
        </li>
        
    </div>
)

}



export default Card;