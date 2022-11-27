import React from 'react'
import slider_1 from '../assets/images/slider_1.jpg'
import slider_2 from '../assets/images/slider_2.jpg'



function Banner() {
  const sliderData = [
    {image: 'https://bizweb.dktcdn.net/100/441/086/themes/877811/assets/slider_1.jpg?1667792117405'},
    {image: 'https://bizweb.dktcdn.net/100/441/086/themes/877811/assets/slider_2.jpg?1667792117405'}
  ]

  return (
    <div className='banner'>
      {sliderData.map((slide, index) => {
        return (
            <img src={slide.image} alt='slider' />
        )
      })}
    </div>
  )
}

export default Banner
