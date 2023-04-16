import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const SpecialProducts = (props) => {
  return (
    <div className='col-lg-6 col-md-6 col-sm-12 mb-3'>
        <div className='special-product-card'>
            <div className='special-box'>
                <div>
                    <img className='' src={props.image}/>
                </div>
                <div className='special-product-content ms-4'>
                    <h5 className='brand'>{props.brand}  </h5>
                    <h6 className='title'>{props.title}</h6>
                    <ReactStars value='4' edit={false} count={5} size={24} activeColor="#ffd700"  />
                    <p className='price'>{props.price}   </p>

                    <div className='discount-till d-flex align-items-center gap-10'>
                        <p className='mb-0'>
                          <b>5 </b>days
                           </p>
                           <div className='d-flex gap-10 align-items-center'>
                            <span className='badge badge-rounde rounded-circle  '>1</span>:
                            <span className='badge badge-rounde rounded-circle  '>2</span>:
                            <span className='badge badge-rounde rounded-circle  '>3</span>:
                           </div>

                           
                    </div>
                    <div className='prod-count mb-3'>
                            <p>products: 5</p>
                          <div class="progress">
                                <div class="progress-bar" role="progressbar" style={{"width":"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                    </div>
                    <Link className='button'> add to cart</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProducts