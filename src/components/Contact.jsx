import React from 'react'
import logoFooter from '../assets/images/logoFooter.png'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'
import methodsOfPayment from '../assets/images/methodsOfPayment.png'


function Contact() {
  return (
    <div className='footerContact'>
      <div className='firstContactDiv'>
        <img src={logoFooter} alt='LogoFooter' className='logoFooter' /> 
        <br />
        <FaMapMarkerAlt />
        <span className='boldText'>Address:</span> Lầu 3 - Tòa nhà Lữ Gia - Số 70 Lữ Gia - P.15 - Q.11, Tp.HCM
        <br />
        <MdPhoneIphone />
        <span className='boldText'>Phone Number:</span> 19006750
        <br />
        <MdEmail />
        <span className='boldText'>Email:</span> support@sapo.vn
      </div>
      <div className='contactDiv'>
        <span className='boldText'>Customer Support</span>
        <br />
        About Us 
        <br />
        Contact 
        <br />
        Store Locations 
        <br />
        Financing 
        <br />
        Online shopping guide
        <br />
        Old phones trade-in
      </div>
      <div className='contactDiv'>
        <span className='boldText'>Policies</span>
        <br />
        Privacy Policies
        <br />
        Exchange Policies 
        <br />
        Warranty Policies 
        <br />
        Deposit Policies 
      </div>
      <div className='contactDiv'>
        <span className='boldText'>Hotline supports</span>
        <br />
        For purchasing: 19006750 (8am-8pm)
        <br />
        For warranty: 19006750 (8am-8pm)
        <br />
        For complaint: 19006750 (8am-8pm)
        <br />
        <span className='boldText'> Methods of Payment</span>
        <br />
        <img src={methodsOfPayment} alt='Methods Of Payment' className='methodsOfPayment'/>
      </div>


    </div>
    
    
  )
}

export default Contact
