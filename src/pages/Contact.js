import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import {AiOutlineHome} from 'react-icons/ai'
import {BiPhoneCall} from 'react-icons/bi'
import {AiOutlineMail}  from 'react-icons/ai'
import {AiOutlineInfoCircle} from 'react-icons/ai'
const Contact = () => {
  return (
    <>
      <Meta title = {'contact us'}/>
       <BreadCrumb title ='contact us'/>
       <div className='contact-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row '>
            
            <div className='col-12'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12038.700835355508!2d28.9412191!3d41.0323612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba0cc94ab6e7%3A0x31480b82223c5a08!2sFlatofis%20Hali%C3%A7!5e0!3m2!1str!2str!4v1680035043941!5m2!1str!2str" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='col-md-7 col-sm-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between '>
               <div>
               <h3 className='contact-title mb-4'>contact </h3>
               
               <form className='d-flex flex-column gap-15'>
                <div>
                  <input placeholder='name' type='text' className='form-control'/>
                </div>
                <div>
                  <input placeholder='email' type='text' className='form-control'/>
                </div>

                <div>
                  <input placeholder='phone' type='number' className='form-control'/>
                </div>

                <div>
                  <textarea placeholder='comment' rows='10' type='text' className='form-control'></textarea>
                </div>
                <div>
                  <button className='button border-0' type='submit'>submit</button>
            </div>
               </form>

               </div> 
               
               </div>
             
          
           </div>
           <div className='col-md-5 col-sm-12 mt-5'>
                <div>
                <h3 className='contact-title mb-4'>get in touch with us</h3>
                <div>
                  <ul className='ps-0'>
                    <li className='  d-flex gap-15 '>  <AiOutlineHome className='fs-5 '/>
                     <p>şişi istanbul, 4352 sk</p>
                      </li>
                   
                            
                  <li className='mb-3 d-flex gap-15 align-items-center'> <BiPhoneCall/>
                  <a className='text-dark' href=''> +90 505 1121 303</a>                
                   </li>

                  <li className='mb-3  d-flex gap-15 align-items-center'><AiOutlineMail/>walaa.horani@hotmail.com</li>

                  <li className='mb-3  d-flex gap-15 align-items-center'><AiOutlineInfoCircle/>
                  <p className='mb-0'></p>  monday to friday 8:00 - 16:00</li>
                   
                  </ul>
                </div>
                </div>

              </div>
           </div>
        </div>
       </div>
    </>
  )
}

export default Contact