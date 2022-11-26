import React from 'react'
import { Menu, Space} from 'antd';
import { MdOutlineAddModerator } from 'react-icons/md';
import { BiGame } from 'react-icons/bi';
import { BsList, BsSmartwatch, BsSpeaker } from 'react-icons/bs';
import { AiFillGift } from 'react-icons/ai'
import { FiSmartphone } from 'react-icons/fi'
import { SlScreenTablet, SlEarphones } from 'react-icons/sl'
import { GiCharging } from 'react-icons/gi'

function ItemsCategories() {


  return (
    <div>
      <Space>
      <Menu 
        mode='inline' 
        onClick={(info) => {
          console.log(info.key)
        }}
        items={[
          {label : "Items List", key : "list", icon: <BsList/>},
          {label : "All promotions", key : "promotions", icon: <AiFillGift/>},
          {label : "Cell Phones", 
           key : "phones", 
           icon: <FiSmartphone/>, 
           children: [
            {label : "Apple", key : "apple phones"},
            {label : "Samsung", key : "samsung phones"},
            {label : "Xiaomi", key : "xiaomi phones"},
            {label : "Oppo", key : "oppo phones"},
           ]},
           {label : "Tablets", 
           key : "tablets", 
           icon: <SlScreenTablet/>, 
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
           icon: <SlEarphones/>, 
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
           icon: <BsSmartwatch/>, 
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
           icon: <GiCharging/>, 
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
           icon: <BsSpeaker/>, 
           children: [
            {label : "Sony", key : "sony speakers"},
            {label : "JBL", key : "jbl speakers"},
            {label : "Harman", key : "harman speakers"},
            {label : "Mozard", key : "mozard speakers"},
            {label : "HOCO", key : "hoco speakers"},
            {label : "Xiaomi", key : "xiaomi speakers"},
           ]},
          {label : "Cases", key : "cases", icon: <MdOutlineAddModerator/>},
          {label : "Phone Accessories", key : "phone accessories", icon: <BiGame/> },
          {label : "Exchange", key : "exchange", icon: <iSmartphone/>},
         
      ]}></Menu>
      </Space>
    </div>
  )
}

export default ItemsCategories

