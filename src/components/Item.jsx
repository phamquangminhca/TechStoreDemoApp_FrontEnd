import React from 'react'

function Item({image, text}) {
  return (
    <div className='item'>
      <img src={image} alt='' style={{'width':'85px'}} className='item__image'/>
      <br/>
      <span className='item__text-size'>{text}</span>
    </div>
  )
}

export default Item
