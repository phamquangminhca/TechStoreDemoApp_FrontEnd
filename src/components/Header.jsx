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
        <div className='top'>
            <img src={logo} alt='Logo' className='logo' />
            {/* <FiMonitor id='monitor'/>
            <BsCartDash id='cart' /> */}
            <ItemSearch />
            <BiPhoneCall className='firstIconImg' size={25}/>
            <div className='asideText'>
              <h8>Call to buy</h8>
              <br/>
              <h8>19006750</h8>
            </div>
            <BiMap className='iconImg' size={25}/>
            <div className='asideText'>
              <h8>Store</h8>
              <br/>
              <h8>Locations</h8>
            </div>
            <AiOutlineUser className='iconImg' size={25} />
            <div className='asideText'>
              <h8>Account</h8>
              <br/>
              <h8>Login</h8>
            </div>
            <Button ghost color='white' className='shoppingCartButton'>
              <BsCartDash size={15}/>
              <h8> Cart</h8>
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
