import React, {useState} from 'react'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { FiSmartphone } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineCreditCard } from 'react-icons/ai'
import { Divider } from 'antd';

function Banner() {
  const sliderData = [
    {image: 'https://bizweb.dktcdn.net/100/441/086/themes/877811/assets/slider_1.jpg?1667792117405'},
    {image: 'https://bizweb.dktcdn.net/100/441/086/themes/877811/assets/slider_2.jpg?1667792117405'}
  ]

  const [current, setCurrent] = useState(0)
  const length = sliderData.length


  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  return (
    <div className='banner'>
        <div className='banner__top'>
            <FiSmartphone/>
            Help selling old devices &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <AiOutlineShoppingCart/>
            Help shopping online &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <AiOutlineCreditCard />
            Help financing
            <Divider/>
        </div>
        
        <div className='banner__main-slide'>
            <FaArrowAltCircleLeft className='banner__left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='banner__right-arrow' onClick={nextSlide} />

            {sliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt='slider' className='banner__slider-image'/>)}
                    </div>
                )
            })}
        </div>
        <img src='https://bizweb.dktcdn.net/100/441/086/themes/877811/assets/bottom_banner_1.jpg?1667792117405' alt='' className='slider-bottom-image' />
        <img src='https://bizweb.dktcdn.net/100/441/086/themes/877811/assets/bottom_banner_2.jpg?1667792117405' alt='' className='slider-bottom-image' />
        <img src='https://bizweb.dktcdn.net/100/441/086/themes/877811/assets/bottom_banner_3.jpg?1667792117405' alt='' className='slider-bottom-image' />
    </div>
  )
}

export default Banner
