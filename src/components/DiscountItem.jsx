import React from 'react'
import discountItemFrame from '../assets/images/discountItemFrame.webp'

function DiscountItem({img}) {
  return (
    <div className='discount-item'>
      <div className='discount-item__white-block'></div>
      <img src={discountItemFrame} alt='' className='discount-item__img-frame'/>
      <img src={img} alt='' className='discount-item__img'/>
    </div>
  )
}

export default DiscountItem
