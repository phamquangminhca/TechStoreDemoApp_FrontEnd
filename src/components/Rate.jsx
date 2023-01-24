import React from 'react'
// import { FaStar } from 'react-icons/fa';
import fullStar from '../assets/images/fullStar.png'
import emptyStar from '../assets/images/emptyStar.png'

function Rate({rating}) {


  return (
    <div style={{"marginTop":"10px"}}>
        {[...Array(5)].map((star, i) => {
            // return <FaStar size={20} color={i < rating ? "#ffc107" : "#e4e5e9"}/>
            return (
              i < rating ? <img style={{'width':'20px'}} src={fullStar} alt=''/> : <img src={emptyStar} style={{'width':'20px'}} alt=''/>
            )
        })}
        
    </div>
  )
}


export default Rate
