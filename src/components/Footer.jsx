import React from 'react'
import { useState } from "react";
import PropTypes from 'prop-types'
import { Button } from 'antd';
// import 'antd/dist/reset.css';
import {BsFacebook} from 'react-icons/bs'
import {SiZalo} from 'react-icons/si'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import { Input} from 'antd';
import Contact from './Contact';
const { Search } = Input;

function Footer({ text, bgColor, textColor }) {

  const [email, setEmail] = useState('')

  const footerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  // const handleSubmit = async (e) => {

  // }

  // const handleChange = (e) => {
  //   setEmail(e.target.value)
  // }

  const onSearch = async (e) => {

  }
     
  return (
    <footer  className='outerFooter'>
      <div className='footer' style={footerStyles}>
      <BsFacebook className='firstFooterIcon' size={30} />
      <SiZalo className='footerIcon' size={30}/>
      <BsInstagram className='footerIcon' size={30}/>
      <AiOutlineMail className='mailFooterIcon' size={30}/>
      <div className='asideTextFooter'>
          <h8>Do you want special promotion?</h8>
            <br/>
          <h8>Register now!</h8>
      </div>
      {/* <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Enter item's name..." value={email} onChange={handleChange} />
        <button type="submit" id='registerButtonFooter'>Register</button>
      </form> */}
      <Search placeholder="Enter email to get promotion..." onSearch={onSearch} className="searchFooter" enterButton='Register' />
      </div>

      <Contact />
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



