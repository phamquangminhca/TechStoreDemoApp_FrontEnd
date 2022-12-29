import React from 'react'
import Banner from '../components/Banner'
import Menu from '../components/Menu'
import ListItems from '../components/ListItems'
import ListPromotions from '../components/ListPromotions'
import ListDiscountItems from '../components/ListDiscountItems'

function Home() {
  return (
    <div className='home-top'>
      <div className='home'>
        <Menu />
        <Banner />
      </div>
      <ListItems/>
      <ListPromotions/>
      <ListDiscountItems/>
    </div>
  )
}

export default Home
