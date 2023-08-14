import React from 'react'
import discountItemFrame from '../assets/images/discountItemFrame.webp'
import fireIcon from '../assets/images/fireIcon.png'
import { useState } from 'react'
import Rate from './Rate'
// import searchIcon from '../assets/images/searchIcon.png'
// import shuffleIcon from '../assets/images/shuffleIcon.png'
import {RiCloseFill} from 'react-icons/ri'
import popupGiftBox from '../assets/images/popupGiftBox.png'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import {TiArrowShuffle} from 'react-icons/ti'
import {GoSearch} from 'react-icons/go'

function RegularItem({img, productName, price, numItemsSold, rating, imgBack, brand, itemCode}) {

  const [hovered, setHovered] = useState(false)

  const [popup, setPop] = useState(false)

  let [addItemToCartCount, setCount] = useState(1)

  const incrementCount = () => {
    addItemToCartCount = addItemToCartCount + 1
    setCount(addItemToCartCount)
  }

  const decrementCount = () => {
    if (addItemToCartCount > 1) {
      addItemToCartCount = addItemToCartCount - 1
    } 
    setCount(addItemToCartCount)
  }

  const onMouseEnter = e => {
    setHovered(true)
  };

  const onMouseLeave = e => {
    setHovered(false)
  };

  const style = hovered ? {opacity: 1} : {opacity: 0}

  const imgFrontStyle = hovered ? {opacity: 0} : {opacity: 1}

  const frameStyle = hovered ? {zIndex:4} : {}
  const styleButton = hovered ? {zIndex: 5} : {zIndex: 2}

  const searchItem = () => {
    setPop(!popup)
  }

  const compareItem = () => {
    console.log("compare")
  }

  const closePopup = () => {
    setPop(false)
    enableBodyScroll(document.body)
  }

  return (
    <div>
    <div className='discount-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className='discount-item__hover-animation' >

        <div style={{"position":"absolute"}}>
          {imgBack && <img src={imgBack} alt='' style={style} className='img-back'/>}
          {!imgBack && <img src={img} alt='' style={style} className='img-back'/>}
          {/* <button className="discount-item__background-button-1"  style={styleButton} onClick={searchItem}><img src={searchIcon} alt='' style={{'width':'20px','height':"20px","position":"relative","top":"1px"}}/></button>
          <button className='discount-item__background-button-2'  style={styleButton} onClick={compareItem}><img src={shuffleIcon} alt='' style={{'width':'20px','height':"20px","position":"relative","top":"1px"}}/></button> */}
          <button className="discount-item__background-button-1"  style={styleButton} onClick={searchItem}><GoSearch size={16}/></button>
          <button className='discount-item__background-button-2'  style={styleButton} onClick={compareItem}><TiArrowShuffle size={20}/></button>
        </div>
        <div style={{"position":"absolute"}} >
          <img src={discountItemFrame} alt='' style={frameStyle} className='discount-item__img-frame' />
          <img src={img} alt='' style={imgFrontStyle} className='discount-item__img img-front' />
        </div>
      
      </div>
      <div className='dicount-item__body'>
        <p className='dicount-item__body_name'>{productName}</p>
        <Rate rating={rating}/>
        <p className='dicount-item__body_price'>{price}</p>
      </div>
      <div className='dicount-item__numbers-sold'>
        <img src={fireIcon} alt=''/>
        <small>{numItemsSold} items have been sold</small>
      </div>
      
    </div>
    <div>
      {popup? 
      <div className='discount-item__background-blur'>
        {disableBodyScroll(document.body)}
        <div className='discount-item__pop-up'>
          <div className='discount-item__pop-up_img'>
            <img src={img} alt='' className='pop-up-img item-img'/>
            <img src={discountItemFrame} alt='' className='pop-up-img' />
          </div>
          <div className='pop-up-next-to-div'>
            <div className='popup-header'>
              <h3 className='popup-header-text'>{productName}</h3>
              <button className='popup-header-close-button' onClick={closePopup}><RiCloseFill size={20}/></button>
            </div>
            <span style={{'fontSize':'15px'}}>Brand: <span style={{"color":"blue"}}>{brand}</span> | Item code: <span style={{"color":"blue"}}>{itemCode}</span></span>
            <span><Rate rating={rating}/></span>
            
            <div className='popup-header-price'>{price}</div>
            <div className='popup-header-promotions'>
              <div className='popup-header-promotions-title'>
                <img src={popupGiftBox} alt='' style={{"width":"20px"}}/>
                GOOD DEALS - QUICK
              </div>
              <div className='popup-header-promotions-list'>
                <ul>
                  <li>Enter code <span style={{'fontWeight':'bold'}}>EGANY</span> to get 5% discount <span style={{'color':'red','cursor':'pointer'}}>Copy</span></li>
                  <li>10% discount for purchasing 5 or more items</li>
                  <li>Get a gift card after purchasing 500k or more</li>
                </ul>
              </div>
            </div>
            <div className='discount-item__pop-up_select-number'>
                <button className='discount-item__pop-up_select-number-btn' onClick={decrementCount}><AiOutlineMinus/></button>
                {addItemToCartCount}
                <button className='discount-item__pop-up_select-number-btn' onClick={incrementCount}><AiOutlinePlus/></button>
            </div>
            <button className='pop-up-button'>ADD TO CART</button>
          </div>
          
        </div>
      </div> : ""}
    </div>
    </div>
  )
}

RegularItem.defaultProps = {
  itemCode: "Updating"
}

export default RegularItem
