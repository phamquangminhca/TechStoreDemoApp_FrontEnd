import React from 'react'
import discountItemFrame from '../assets/images/discountItemFrame.webp'
import fireIcon from '../assets/images/fireIcon.png'
import fiveStar from '../assets/images/fiveStar.png'
import noStar from '../assets/images/noStar.png'

function DiscountItem({img, productName, price, numItemsSold, goodRating}) {
  return (
    <div className='discount-item'>
      <div className='discount-item__white-block'></div>
      <img src={discountItemFrame} alt='' className='discount-item__img-frame'/>
      <img src={img} alt='' className='discount-item__img'/>
      <div style={{"textAlign":"left"}}>
        <p style={{"fontSize":"14px", "height":"30px"}}>{productName}</p>
        {goodRating && <img src={fiveStar} alt='' style={{"width":"80px"}}/>}
        {!goodRating && <img src={noStar} alt='' style={{"width":"80px"}}/>}  
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
