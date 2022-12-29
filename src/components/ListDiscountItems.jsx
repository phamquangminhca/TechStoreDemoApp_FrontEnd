import React from 'react'
import DiscountItem from './DiscountItem'
import discountItem1 from '../assets/images/discountItem1.webp'
import discountItem2 from '../assets/images/discountItem2.webp'
import discountItem3 from '../assets/images/discountItem3.webp'
import discountItem4 from '../assets/images/discountItem4.webp'
import discountItem5 from '../assets/images/discountItem5.webp'

function ListDiscountItems() {
  return (
    <div className='list-discount-items'>
      <DiscountItem img={discountItem1}/>
      <DiscountItem img={discountItem2}/>
      <DiscountItem img={discountItem3}/>
      <DiscountItem img={discountItem4}/>
      <DiscountItem img={discountItem5}/>
    </div>
  )
}

export default ListDiscountItems
