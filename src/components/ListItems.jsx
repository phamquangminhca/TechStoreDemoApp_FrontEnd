import React from 'react'
import Item from './Item'
import coll_1 from '../assets/images/coll_1.jpg.webp'
import coll_2 from '../assets/images/coll_2.jpg.webp'
import coll_3 from '../assets/images/coll_3.jpg.webp'
import coll_4 from '../assets/images/coll_4.jpg.webp'
import coll_5 from '../assets/images/coll_5.jpg.webp'
import coll_6 from '../assets/images/coll_6.jpg.webp'
import coll_7 from '../assets/images/coll_7.jpg.webp'
import coll_8 from '../assets/images/coll_8.jpg.webp'
import coll_9 from '../assets/images/coll_9.jpg.webp'
import coll_10 from '../assets/images/coll_10.jpg.webp'

function ListItems() {
  return (
    <div className='list-items'>
      <Item image={coll_1} text='Features'/>
      <Item image={coll_2} text='Phones'/>
      <Item image={coll_3} text='Tablets'/>
      <Item image={coll_4} text='Earphones'/>
      <Item image={coll_5} text='Smart Watches'/>
      <Item image={coll_6} text='Port Chargers'/>
      <Item image={coll_7} text='Speakers'/>
      <Item image={coll_8} text='Cases'/>
      <Item image={coll_9} text='Chargers'/>
      <Item image={coll_10} text='Utilities'/>

    </div>
  )
}

export default ListItems
