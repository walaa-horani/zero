import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import watch from '../images/watch.jpg'
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import laptop from '../images/laptop 1.jpg'
const Cart = () => {

  return (
    <>
      <Meta title = {'cart'}/>
       <BreadCrumb title ='cart'/>

       <section className='cart-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                 <div className= 'cart-header py-3 d-flex justify-content-between align-items-center'>
                 <h4 className='cart-col-1'>product</h4>
                 <h4 className='cart-col-2'>price</h4>
                 <h4 className='cart-col-3'>quantity</h4>
                 <h4 className='cart-col-4'>total</h4>
                </div>

                <div className= 'cart-data py-3 d-flex justify-content-between align-items-center'>
              
                <div className='cart-col-1 gap-15 d-flex align-items-center '>
                    <div className='w-25'>
                        <img className='img-fluid' src={watch}/>
                    </div>
                    <div className='w-75'>
                        <h5 className='title'>laptop</h5>
                        <p className='color'>200$</p>
                            <p className='size'>S</p>
                        
                    </div>
                </div>
                <div className='cart-col-2'>
                    <h5 className='price'>$200</h5>
                </div>
                <div className='cart-col-3 d-flex align-items-center gap-15'>
                    <div>
                        <input min={1} max={10} className='form-control'  type='number'/>
                    </div>
                    <div>
                        <AiFillDelete className='text-danger '/>
                    </div>
                </div>
                <div className='cart-col-4'>
                  
                </div>

                </div>


                <div className= 'cart-data py-3 d-flex justify-content-between align-items-center'>
              
              <div className='cart-col-1 gap-15 d-flex align-items-center '>
                  <div className='w-25'>
                      <img className='img-fluid' src={laptop}/>
                  </div>
                  <div className='w-75'>
                      <h5 className='title'>laptop</h5>
                      <p className='color'>1200$</p>
                          <p className='size'>Dell</p>
                      
                  </div>
              </div>
              <div className='cart-col-2'>
                  <h5 className='price'>$1200</h5>
              </div>
              <div className='cart-col-3 d-flex align-items-center gap-15'>
                  <div>
                      <input min={1} max={10} className='form-control'  type='number'/>
                  </div>
                  <div>
                      <AiFillDelete className='text-danger '/>
                  </div>
              </div>
              <div className='cart-col-4'>
                
              </div>

              </div>


                </div>

                <div className='col-12 py-2 mt-4'>
                   <div className='shopping'>

                   <Link to='/store' className='button'>continue shopping</Link>
                   <div className='checkout '>
                    <h4>subtotal: $1400</h4>
                    <p>taxes and shipping calculated at checkout</p>
                    <Link to='/checkout' className='button'>checkout</Link>
                   </div>
                   </div>
                </div>
            </div>
        </div>
       </section>
    </>
  )
}

export default Cart