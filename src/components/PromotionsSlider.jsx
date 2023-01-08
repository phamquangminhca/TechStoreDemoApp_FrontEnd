import React from 'react'
import { useEffect } from 'react'
import { autoTextSlide } from '../features/autoSlide';

function PromotionsSlider() {

  useEffect(() => {
    autoTextSlide()
  })

  return (
    <div style={{"textAlign":"left"}}>
      <span style={{"marginLeft":"25px"}}>PROMOTIONS NEWS</span>
      <div className='textSlider'>
        <div className='textSlides'>
            <input type='radio' name='radio-btn-text' id='textRadio1'/>
            <input type='radio' name='radio-btn-text' id='textRadio2'/>
            <input type='radio' name='radio-btn-text' id='textRadio3'/>

            <div className='textSlide firstSlide'>
                <span>8% discount for purchase of at least 499K</span>
            </div>
            <div className='textSlide secondSlide' style={{"marginLeft":"320px"}}>
                <span>10% discount for purchase of at least 800K</span>
            </div>
            <div className='textSlide' style={{"marginLeft":"320px"}}>
                <span>30K discount for purchase of at least 399K</span>
            </div>

            <div className='text-slide_navigation-auto'>
              <div className='text-auto-btn1'></div>
              <div className='text-auto-btn2'></div>
              <div className='text-auto-btn3'></div>

            </div>
        </div>
        <div className='text_navigation-manual'>
            <label for='textRadio1' className='manual-btn-text' ></label>
            <label for='textRadio2' className='manual-btn-text' ></label>
            <label for='textRadio3' className='manual-btn-text' ></label>

          </div>
      </div>
    </div>
  )
}

export default PromotionsSlider
