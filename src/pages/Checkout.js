import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import { Link } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import watch from '../images/watch.jpg'
const Checkout = () => {
  return (
    <>
    <Meta title = {'checkout'}/>
       <BreadCrumb title ='checkout'/>
       <div className='checkout-wrapper'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-lg-7 col-md-6 col-sm-12'>
                   <div className='checkout-left'>
                    
                   <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
                <ol class="breadcrumb">
                <li class="breadcrumb-item"><Link className='text-dark' to='/cart' href="#">cart</Link></li>
                &nbsp; /
                <li class="breadcrumb-item active" aria-current="page">information</li> &nbsp; /
                <li class="breadcrumb-item active" aria-current="page">shipping</li> &nbsp; /
                <li class="breadcrumb-item active" aria-current="page">payment</li>
                </ol>
                </nav>

                <h4 className='contact-infor'>contact information</h4>
                <p className='user-details total'>walaa.horani@hotmail.com</p>
                <h4 className='mb-5 mt-5'>shipping address</h4>
                <form action='' className=' flex-wrap d-flex gap-15 justiy-content-between'>
                
                   <div className='w-100'>
                    <select className='  form-control form-select'>
                        <option value='' selected disabled>select country</option>
                    </select>
                   </div>
                   <div className='flex-grow-1'>

                    <input placeholder='first name' type='text' className='form-control '/>
                  
                   </div>

                   <div className='flex-grow-1'>
                    
                   <input  placeholder='last name'  type='text' className='form-control '/>
                 
                   </div>

                   <div>

                   <input  placeholder='address' type='text' className='form-control '/>

                   </div>
                   <div>

                   <input  placeholder='apartment (optional)' type='text' className='form-control '/>

                   </div>

                   <div className='flex-grow-1'>

                   
                   <select className='form-control'>
                    <option selected disabled>
                        selecet state
                    </option>
                   </select>
                   
                   </div>

                   <div className='flex-grow-1'>

                   <input  placeholder='city' type='text' className='form-control '/>
                   
                   </div>

                   <div className='flex-grow-1'>

                   <input placeholder='ZIP code' type='text' className='form-control '/>
                   
                   </div>
                        <div className='w-100'>
                            <div className='d-flex align-items-center justify-content-between'>
                              <Link className='text-dark' to='/cart'><AiOutlineArrowLeft className='me-2'/>return to cart</Link>
                              <Link className='button' to='/store'> continue shopping</Link>
                            </div>
                        </div>
                </form>
                    </div>         
                </div>
                    <div className='col-lg-5 col-md-4 col-sm-12'>

                         <div className='border-bottom py-4'>
                           <div className='d-flex gap-10 align-items-center'>
                           <div className='w-75 d-flex gap-10'>

                                                        
                            <div className='w-25 position-relative'> 
                            <span style={{'top':'-10px','right':'2px'}} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>1</span>
                                <img className='img-fluid' src={watch}/>
                            </div>
                            <div>
                                <h5 >watch</h5>
                                <p className='total-price'> adult's watch</p>
                            </div>
                            </div>
                                <div className='flex-grow-1'>
                                    <h5 className='total'>100 $</h5>
                                   
                                    </div>

                          
                            </div>
                           </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h4 className='total'>subtotal</h4>
                            <p className='total-price'>10000 $</p>
                         </div>
                        <div className='d-flex justify-content-between align-items-center border-bottom'>
                             <p className='mb-0 total'>shipping</p>
                             <p className='mb-0 total-price '>10000 $</p>
                         </div>
                         <div className='d-flex justify-content-between align-items-center  py-4'>
                            <h4 className='total'>TOTAL</h4>
                            <h5 >10000 $</h5>
                         </div>
                        

                </div>
            </div>
        </div>
       </div>
    </>
  )
}

export default Checkout