import React from 'react'
import discountItemFrame from '../assets/images/discountItemFrame.webp'
import fireIcon from '../assets/images/fireIcon.png'
import { useState } from 'react'
import Rate from './Rate'
import searchIcon from '../assets/images/searchIcon.png'
import shuffleIcon from '../assets/images/shuffleIcon.png'


function DiscountItem({img, productName, price, numItemsSold, rating, imgBack}) {

  const [hovered, setHovered] = useState(false)

  const onMouseEnter = e => {
    setHovered(true)
  };

  const onMouseLeave = e => {
    setHovered(false)
  };

  const style = hovered ? {opacity: 1} : {opacity: 0}


  return (
    <div className='discount-item'>
      <div className='discount-item__hover-animation'>

        <div style={{"position":"absolute"}}>
          {imgBack && <img src={imgBack} alt='' style={style} className='img-back'/>}
          {!imgBack && <img src={img} alt='' style={style} className='img-back'/>}
          <button className="discount-item__background-button-1"><img src={searchIcon} alt='' style={{'width':'20px','height':"20px","position":"relative","top":"1px"}}/></button>
          <button className='discount-item__background-button-2'><img src={shuffleIcon} alt='' style={{'width':'20px','height':"20px","position":"relative","top":"1px"}}/></button>
        </div>
        <div style={{"position":"absolute"}} >
          <img src={discountItemFrame} alt='' className='discount-item__img-frame' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
          <img src={img} alt='' className='discount-item__img img-front' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
        </div>
      
      </div>
      <div style={{"textAlign":"left"}}>
        <p style={{"fontSize":"14px", "height":"30px"}}>{productName}</p>
        <Rate rating={rating}/>
        <p style={{"color":"red", "fontWeight":"bold"}}>{price}</p>
      </div>
      <div className='dicount-item__numbers-sold'>
        <img src={fireIcon} alt='' style={{"height":"14px"}}/>
        <small>{numItemsSold} items have been sold</small>
      </div>
      
    </div>
  )
}

export default DiscountItem
