import PropTypes from 'prop-types'
import React from 'react'
import ItemSearch from './ItemSearch'
import {BsCartDash} from 'react-icons/bs'
import logo from '../assets/images/logo.png'
import {BiPhoneCall} from 'react-icons/bi'
import {BiMap} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import { Button } from 'antd'

function Header({ text, bgColor, textColor }) {

  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
        <div className='header'>
            <img src={logo} alt='Logo' className='header__logo' />
            <ItemSearch />
            <BiPhoneCall className='header__phone-icon' size={25}/>
            <div className='header__text-next-to-icon'>
              <span>Call to buy</span>
              <br/>
              <span>19006750</span>
            </div>
            <BiMap className='header__map-icon' size={25}/>
            <div className='header__text-next-to-icon'>
              <span>Store</span>
              <br/>
              <span>Locations</span>
            </div>
            <AiOutlineUser className='header__profile-icon' size={25} />
            <div className='header__text-next-to-icon'>
              <span>Account</span>
              <br/>
              <span>Login</span>
            </div>
            <Button ghost color='white' className='header__shopping-cart-button'>
              <BsCartDash size={15}/>
              <span> Cart</span>
            </Button>
        </div>

       
    </header>
  )
}

Header.defaultProps = {
    text: 'techstore.com',
    bgColor: 'rgb(220,10,10)',
    textColor: 'rgb(255, 255, 255)'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}



export default Header
