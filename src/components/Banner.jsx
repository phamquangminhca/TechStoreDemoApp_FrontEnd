import React from 'react'
// import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import { Divider } from 'antd';
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import { useEffect } from 'react';
import { autoSlide } from '../features/autoSlide';

function Banner() {
  const sliderData = [
    {image: 'https://bizweb.dktcdn.net/100/441/086/themes/877811/assets/slider_1.jpg?1667792117405'},
    {image: 'https://bizweb.dktcdn.net/100/441/086/themes/877811/assets/slider_2.jpg?1667792117405'}
  ]

  useEffect(() => {
    autoSlide()
  })

  // const [current, setCurrent] = useState(1)


  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null
  }

  // const prevSlide = () => {
  //   setCurrent(current === 1 ? 2 : 1)
  // }

  // const nextSlide = () => {
  //   setCurrent(current === 2 ? 1 : 2)
  // }

  return (
    <div className='banner'>
        <div className='banner__top'>
          <div className='banner__top_options'>
            <img src={image1} alt='image1' className='banner__top_imgs' />
            <a href='./' className='banner__top_options-text'>Help selling old devices</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className='banner__top_options'>
            <img src={image2} alt='image2' className='banner__top_imgs' />
            <a href='./' className='banner__top_options-text'>Help shopping online</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className='banner__top_options'>
            <img src={image3} alt='image3' className='banner__top_imgs' />
            <a href='./' className='banner__top_options-text'>Help financing</a>
          </div>

            <Divider/>
        </div>
        
        {/* <div className='banner__main-slide'>
            <FaArrowAltCircleLeft className='banner__left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='banner__right-arrow' onClick={nextSlide} />

            {sliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt='slider' className='banner__slider-image'/>)}
                    </div>
                )
            })}
        </div> */}

        <div className='slider'>
          <div className='slides'>
            <input type='radio' name='radio-btn' id='radio1'/>
            <input type='radio' name='radio-btn' id='radio2'/>

            {/* <FaArrowAltCircleLeft className='banner__left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='banner__right-arrow' onClick={nextSlide} /> */}

            <div className='banner__main-slide first_img'>
              <img src='https://bizweb.dktcdn.net/100/441/086/themes/877811/assets/slider_1.jpg?1667792117405' alt=''/>
            </div>
            <div className='banner__main-slide'>
              <img src='https://bizweb.dktcdn.net/100/441/086/themes/877811/assets/slider_2.jpg?1667792117405' alt='' />
            </div>

            <div className='banner_navigation-auto'>
              <div className='auto-btn1'></div>
              <div className='auto-btn2'></div>
            </div>
          </div>

          <div className='banner_navigation-manual'>
            <label for='radio1' className='manual-btn' ></label>
            <label for='radio2' className='manual-btn' ></label>
            {/* <label for='radio3' className='manual-btn' ></label>
            <label for='radio4' className='manual-btn' ></label> */}

          </div>

        </div>

        <img src='https://bizweb.dktcdn.net/100/441/086/themes/877811/assets/bottom_banner_1.jpg?1667792117405' alt='' className='slider-bottom-image' />
        <img src='https://bizweb.dktcdn.net/100/441/086/themes/877811/assets/bottom_banner_2.jpg?1667792117405' alt='' className='slider-bottom-image' />
        <img src='https://bizweb.dktcdn.net/100/441/086/themes/877811/assets/bottom_banner_3.jpg?1667792117405' alt='' className='slider-bottom-image' />
    </div>
  )
}

export default Banner
