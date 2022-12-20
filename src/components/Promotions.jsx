import React from 'react'
import promotion_card from '../assets/images/promotion_card.png'

function Promotions() {
  return (
    <div className='promotions'>
      <img src={promotion_card} alt='' className='promotions__img'/>
      <div>
        ENTER CODE: EGA50
        <br/>
        50% discount for purchases of at least 500K. Maximum discount 300K
        <div className='promotions__bottom'>
            <button className='promotions__button'>Copy</button>
            <span className='promotions__bottom_text'>Conditions</span>
        </div>
      </div>
    </div>
  )
}

export default Promotions
