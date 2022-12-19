import React from 'react'
import { Menu, Space} from 'antd';
import giftbox from "../assets/images/giftbox.webp"
import phoneIcon from "../assets/images/phoneIcon.webp"
import tabletIcon from "../assets/images/tabletIcon.webp"
import earphonesIcon from "../assets/images/earphonesIcon.webp"
import smartwatchIcon from "../assets/images/smartwatchIcon.webp"
import portablechargerIcon from "../assets/images/portablechargerIcon.webp"
import bluetoothspeakerIcon from "../assets/images/bluetoothspeakerIcon.webp"
import casesIcon from "../assets/images/casesIcon.webp"
import accessoriesIcon from "../assets/images/accessoriesIcon.webp"
import charger1Icon from "../assets/images/charger1Icon.webp"
import charger2Icon from "../assets/images/charger2Icon.webp"
import listItemsIcon from "../assets/images/listItemsIcon.png"


function ItemsCategories() {


  return (
    <div>
      <Space>
      <Menu 
        className='menu'
        style={{
          width: 270,
          textAlign: 'left',
        }}
        mode='vertical'
        onClick={(info) => {
          console.log(info.key)
        }}
        items={[
          {label : "ITEMS LIST", key : "list", icon: <img src={listItemsIcon} style={{'float': 'left', "marginTop":"5px"}}  width='30px' alt=''/>, style: {"background-color":"#2F4857", "color":"white", "font-weight":"bold"}},
          {label : "All promotions", key : "promotions", icon : <img src={giftbox} style={{'float': 'left'}} alt='' />, style: { 'display': 'inline-block'}},
          {label : "Cell Phones", 
           key : "phones", 
           icon: <img src={phoneIcon} alt='' style={{"float":"left", "marginTop":"5px"}}/>, 
           children: [
            {label : "Apple", key : "apple phones"},
            {label : "Samsung", key : "samsung phones"},
            {label : "Xiaomi", key : "xiaomi phones"},
            {label : "Oppo", key : "oppo phones"},
           ]},
           {label : "Tablets", 
           key : "tablets", 
           icon: <img src={tabletIcon} alt='' style={{'float': 'left', "marginTop":"5px"}}  />, 
           children: [
            {label : "Samsung", key : "samsung tablets"},
            {label : "Ipad", key : "ipads"},
            {label : "Xiaomi", key : "xiaomi tablets"},
            {label : "Lenovo", key : "lenovo tablets"},
            {label : "Huawei", key : "huawei tablets"},
            {label : "Asus", key : "asus tablets"},
           ]},
           {label : "Earphones", 
           key : "earphones", 
           icon: <img src={earphonesIcon} alt='' style={{'float': 'left', "marginTop":"5px"}} />, 
           children: [
            {label : "Samsung", key : "samsung earphones"},
            {label : "Apple", key : "airpods"},
            {label : "Sony", key : "sony earphones"},
            {label : "Mozard", key : "mozard earphones"},
            {label : "Xiaomi", key : "xiaomi earphones"},
            {label : "HOCO", key : "hoco earphones"},
           ]},
           {label : "Smart Watches", 
           key : "smart watches", 
           icon: <img src={smartwatchIcon} alt='' style={{'float': 'left', "marginTop":"5px"}} />, 
           children: [
            {label : "Samsung", key : "samsung smartwatches"},
            {label : "Garmin", key : "garmin smartwatches"},
            {label : "Apple", key : "apple smartwatches"},
            {label : "Xiaomi", key : "xiaomi smartwatches"},
            {label : "Oppo", key : "oppo smartwatches"},
            {label : "Sony", key : "sony smartwatches"},
           ]},
           {label : "Portable Chargers", 
           key : "portable chargers", 
           icon: <img src={portablechargerIcon} alt='' style={{'float': 'left', "marginTop":"5px"}} />, 
           children: [
            {label : "Ava", key : "ava chargers"},
            {label : "Anker", key : "anker chargers"},
            {label : "Hydrus", key : "hydrus chargers"},
            {label : "Xiaomi", key : "xiaomi chargers"},
            {label : "Samsung", key : "samsung chargers"},
            {label : "HOCO", key : "hoco chargers"},
           ]},
           {label : "Bluetooth Speakers", 
           key : "bluetooth speakers", 
           icon: <img src={bluetoothspeakerIcon} alt='' style={{'float': 'left', "marginTop":"5px"}} />, 
           children: [
            {label : "Sony", key : "sony speakers"},
            {label : "JBL", key : "jbl speakers"},
            {label : "Harman", key : "harman speakers"},
            {label : "Mozard", key : "mozard speakers"},
            {label : "HOCO", key : "hoco speakers"},
            {label : "Xiaomi", key : "xiaomi speakers"},
           ]},
          {label : "Cases", key : "cases", icon: <img src={casesIcon} alt='' style={{'float': 'left', "marginTop":"5px"}} />},
          {label : "Chargers 1", key : "chargers 1", icon: <img src={charger1Icon} alt='' style={{'float': 'left', "marginTop":"5px"}} />},
          {label : "Chargers 2", key : "chargers 2", icon: <img src={charger2Icon} alt='' style={{'float': 'left', "marginTop":"5px"}}/>},
          {label : "Phone Accessories", 
          key : "phone accessories", 
          icon: <img src={accessoriesIcon} alt='' style={{'float': 'left', "marginTop":"5px"}}/>, 
          children: [
            {label : "Sound devices", key : "sound devices"},
            {label : "Storage devices", key : "storage devices"},
            {label : "Selfie sticks", key : "selfie sticks"},
            {label : "Tripods", key : "tripods"},
            {label : "Keychains", key : "keychains"},
            {label : "Waterproof bags", key : "waterproof bags"},
           ]},
          {label : "Exchange", key : "exchange", icon: <img src={phoneIcon} alt='' style={{'float': 'left', "marginTop":"5px"}}/>},
         
      ]}></Menu>
      </Space>
    </div>
  )
}

export default ItemsCategories

