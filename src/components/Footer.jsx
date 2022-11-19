import React from 'react'
import { useState } from "react";
import PropTypes from 'prop-types'
import { Button } from 'antd';
// import 'antd/dist/reset.css';

function Footer({ text, bgColor, textColor }) {

  const [email, setEmail] = useState('')

  const footerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  const handleSubmit = async (e) => {

  }

  const handleChange = (e) => {
    setEmail(e.target.value)
  }
     
  return (
    <footer className='footer' style={footerStyles}>
      <h4>{text}</h4>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Enter item's name..." value={email} onChange={handleChange} />
        <button type="submit" id='registerButtonFooter'>Register</button>
      </form>
    </footer>
  )
}

Footer.defaultProps = {
    text: 'Do you want special promotion? Register now!',
    bgColor: 'rgb(0, 0, 0)',
    textColor: 'rgb(255, 255, 255)'
}

Footer.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Footer
