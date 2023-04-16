import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import {BsLinkedin,BsGithub, BsInstagram, BsYoutube} from 'react-icons/bs';
const Footer = () => {
  return (
    
    <>
    <footer className='py-3'>
      <div className='container-xxl'>
        <div className='row align-items-center'>
          <div className='col-lg-5 col-md-4'>
            <div className='footer-top-data gap-30 text-center '>
            
              <h2 className='mb-3 text-white sign'>sign up for newsletter</h2>
            </div>
          </div>
          <div className='col-lg-7 col-md-8 col-sm-12'>
          <div class="input-group mb-3">
  <input type="text" class="form-control py-1" placeholder="your email address..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text p-2" id="basic-addon2">subscribe</span>
</div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      

      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-6 text-center'>
            <h4 className='text-white mb-4 mt-4'>contact us</h4>
            <div>
              <address className='text-white'>Hno: istanbul , fatih,<br/> 2234 sokak pinCode: 22345</address>
            </div>
            <a className='mt-4 d-block mb-0 text-white' href='#'>+90 505 1121 303</a>
            <a className='mt-4 d-block mb-0 text-white' href='#'>walaa.horani@hotmail.com</a>

            <div className='social-icons  gap-30 mt-4'>
              <a to='' className='text-white'>
                <BsLinkedin/>
              </a>
              <a to='' className='text-white'>
              <BsInstagram/>
              </a>
              <a to='' className='text-white'>
             <BsYoutube/>
              </a>
              <a to='' className='text-white'>
              <BsGithub/>
              </a>
            </div>
         
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 mt-4 text-center'>
          <h4 className='text-white mb-4'>information</h4>
          <div className='footer-links d-flex flex-column'>
            <Link to='privacy-policy' className='text-white py-2 mb-1'>privacy policy</Link>
            <Link to='Refund-Policy' className='text-white py-2 mb-1'>refund policy</Link>
            <Link  to='Shipping-Policy' className='text-white py-2 mb-1'>shipping policy</Link>
            <Link to='blog'  className='text-white py-2 mb-1'>blogs</Link>
            <Link to='Terms-And-Conditions' className='text-white py-2 mb-1'>terms & conditions</Link>
            </div>
          </div>
          <div className='col-lg-2 col-md-6 col-sm-6 mt-4 text-center'>
          <h4 className='text-white mb-4'>account</h4>
          <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>about us</Link>
              <Link className='text-white py-2 mb-1'>faq</Link>
              <Link className='text-white py-2 mb-1'>contact</Link>
            </div>
          </div>
          <div className='col-lg-2 col-md-6 col-sm-6 mt-4 text-center'>
          <h4 className='text-white mb-4'>quick links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white py-2 mb-1'>labtops</Link>
              <Link className='text-white py-2 mb-1'>headphons</Link>
              <Link className='text-white py-2 mb-1'>tablets</Link>
              <Link className='text-white py-2 mb-1'>watch</Link>
            </div>
          </div>
        </div>
      </div>
      
      
    </footer>
    <footer className='py-3'>

      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}; powered by developer's corner</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer