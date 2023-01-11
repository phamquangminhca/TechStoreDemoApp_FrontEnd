import React from 'react'
import { FaStar } from 'react-icons/fa';

function Rate({rating}) {


  return (
    <div>
        {[...Array(5)].map((star, i) => {
            return <FaStar size={20} color={i < rating ? "#ffc107" : "#e4e5e9"}/>
        })}
        
    </div>
  )
}


export default Rate
