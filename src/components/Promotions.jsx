import React from 'react'
import promotion_card from '../assets/images/promotion_card.png'

function Promotions({ code, text }) {
  return (
    <div className='promotions'>
      <img src={promotion_card} alt='' className='promotions__img'/>
      <div className='promotions__right-side'>
        <span className='promotions__code-text'>CODE: {code}</span>
        <br/>
        <span className='promotions__text-size'>{text}</span>
        <div className='promotions__bottom'>
            <button className='promotions__button'>Copy</button>
            <a href='./' className='promotions__bottom_text'>Conditions</a>
        </div>
      </div>
    </div>
  )
}

export default Promotions
