import React from 'react'
import Promotions from './Promotions'

function ListPromotions() {
  return (
    <div className='list-promotions'>
      <Promotions code="EGA50" text="50% discount for purchases of at least 500K. Discounts up to 300K"/>
      <Promotions code="EGA15" text="15% discount for purchases of at least 500K. Discounts up to 250K"/>
      <Promotions code="EGA99K" text="99K discount for purchases of at least 1000K. Maximum 1 discount per purchase"/>
      <Promotions code="FREESHIP" text="Free delivery for purchases of at least 500K. Only applicable for Ho Chi Minh City area"/>
    </div>
  )
}

export default ListPromotions
