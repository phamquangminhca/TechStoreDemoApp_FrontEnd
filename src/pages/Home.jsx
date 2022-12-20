import React from 'react'
import Banner from '../components/Banner'
import Menu from '../components/Menu'
import ListItems from '../components/ListItems'
import ListPromotions from '../components/ListPromotions'

function Home() {
  return (
    <div className='home-top'>
      <div className='home'>
        <Menu />
        <Banner />
      </div>
      <ListItems/>
      <ListPromotions/>
    </div>
  )
}

export default Home
