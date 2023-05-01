
import React, {useContext, useEffect} from 'react'
import { AxiosContext } from '../Context/AxiosContext'
import Card from './Card'



function UglyList() {

const {arrUgly, getUglies} = useContext(AxiosContext)

// useEffect(() =>{
//   getUglies()
//   console.log("displaying cards")
// }, []);


  return (
    <div>{arrUgly.map((info)=>{
      return(
          <ul key={info._id}>
              <Card {...info}
              // key={info.id}
              id={info.id}
              data={arrUgly}
              imgUrl={info.imgUrl}
              />
          </ul>
      )
  })}</div>
  )
}

export default UglyList;