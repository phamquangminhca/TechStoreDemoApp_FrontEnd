import React, {useState, useEffect} from 'react'
import DiscountItem from './DiscountItem'
import discountItem1 from '../assets/images/discountItem1.webp'
import discountItem2 from '../assets/images/discountItem2.webp'
import discountItem3 from '../assets/images/discountItem3.webp'
import discountItem4 from '../assets/images/discountItem4.webp'
import discountItem5 from '../assets/images/discountItem5.webp'
import discountItemBack1 from '../assets/images/discountItemBack1.webp'

import hotGif from "../assets/images/hotGif.webp"
import Clock from './Clock'
import PromotionsSlider from './PromotionsSlider'

function ListDiscountItems() {

  const [timerDays, setTimerDays] = useState()
  const [timerHours, setTimerHours] = useState()
  const [timerMinutes, setTimerMinutes] = useState()
  const [timerSeconds, setTimerSeconds] = useState()

  let interval

  const startTimer = () => {
    const countDownDate = new Date("January 20, 2023").getTime()

    interval = setInterval(() => {
        const now = new Date().getTime()

        const distance = countDownDate - now

        const days = Math.floor(distance / (24 * 60 * 60 * 1000))
        const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
        const seconds = Math.floor((distance % (60 * 1000)) / 1000)

        if (distance < 0) {
            // Stop Timer
            clearInterval(interval.current)
        } else {
            // Update Timer
            setTimerDays(days)
            setTimerHours(hours)
            setTimerMinutes(minutes)
            setTimerSeconds(seconds)
        }
    })
  }

  useEffect(() => {
    startTimer()
  })

  return (
    <div className='list-discount-items'>
        <div className='list-discount-items__top'>
            <span className='list-discount-items__top_text'>SHOCKING 50% SALE</span>
            <img src={hotGif} alt='' className='list-discount-items__top_img'/>
            <span style={{"marginLeft":"700px"}}>Ends in</span>
            <Clock timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds}/>
        </div>
        <PromotionsSlider />
        <div className='list-discount-items__bottom'>
            <DiscountItem img={discountItem1} productName='Apple Watch Series 7 Aluminium Cellular' price='20.490.000VND' numItemsSold='231' goodRating={true} imgBack={discountItemBack1}/>
            <DiscountItem img={discountItem2} productName='Mozard S21 Bluetooth Speaker' price='550.000VND' numItemsSold='264' goodRating={true}/>
            <DiscountItem img={discountItem3} productName='eValu Spanker' price='220.000VND' numItemsSold='123' goodRating={false}/>
            <DiscountItem img={discountItem4} productName='Xmobile Gram 4' price='450.000VND' numItemsSold='183' goodRating={false}/>
            <DiscountItem img={discountItem5} productName='Xmobile Gram 4 Dull Dog' price='420.000VND' numItemsSold='111' goodRating={false}/>
        </div>

    </div>
  )
}

export default ListDiscountItems
