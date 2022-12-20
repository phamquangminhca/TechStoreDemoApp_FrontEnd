import React from 'react'
import Banner from '../components/Banner'
import Menu from '../components/Menu'
import ListItems from '../components/ListItems'

function Home() {
  return (
    <div className='home-top'>
      <div className='home'>
        <Menu />
        <Banner />
      </div>
      <ListItems/>
    </div>
  )
}

export default Home
