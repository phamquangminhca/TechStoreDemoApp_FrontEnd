import React from 'react'
// import { useState } from "react";
import PropTypes from 'prop-types'
// import { Button } from 'antd';
// import 'antd/dist/reset.css';
import {BsFacebook} from 'react-icons/bs'
import {SiZalo} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import { Input} from 'antd';
import Contact from './Contact';
import Copyright from './Copyright';
const { Search } = Input;

function Footer({ text, bgColor, textColor }) {


  const footerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }


  const onSearch = async (e) => {

  }
     
  return (
    <footer  className='footer'>
      <div className='footer__navbar' style={footerStyles}>
      <BsFacebook className='footer__icon-facebook' size={30} />
      <SiZalo className='footer__icon-zalo' size={30}/>
      <BsInstagram className='footer__icon-instagram' size={30}/>
      <AiOutlineMail className='footer__icon-email' size={30}/>
      <div className='footer__ads-text'>
          <span>Do you want special promotion?</span>
            <br/>
          <span>Register now!</span>
      </div>

      <Search placeholder="Enter email to get promotion..." onSearch={onSearch} className="footer__search-bar" enterButton='Register' />
      </div>

      <Contact />
      <Copyright />
    </footer>
    
  )
}
  

Footer.defaultProps = {
    text: 'Do you want special promotion? Register now!',
    bgColor: 'rgb(38, 37, 37)',
    textColor: 'rgb(255, 255, 255)'
}

Footer.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Footer



