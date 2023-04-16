import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import {Link , useParams} from 'react-router-dom'
import {BiGitCompare} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import { products } from '../utils/Data';
import Marquee from "react-fast-marquee";
import Container from '../components/Container';
import ReactImageZoom from 'react-image-zoom';


const SingleProduct = () => {

  const {productId} = useParams()
  const product = products.find((product) => product.id === productId)
  const {image,title, sm_img_1,sm_img_2,sm_img_3,category,brand,desc,price} = product
  const props = {   zoomWidth: 500, img: image};
  
  return (
    <>
         <Meta title = {'single product'}/>
       <BreadCrumb title ='single product'/>
       <div className='main-product-wrapper py-5 home-wrapper-2'>
      <div className='container bg-white'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='main-product-image'>
         
        
         
          <ReactImageZoom  {...props } /> 
         

            </div>
            <div className='sm-imgs-product'>
            <img  className='ms-3 sm-img' src={sm_img_1}/>
            <img className='ms-2 sm-img' src={sm_img_2}/>
            <img  className='ms-2 sm-img' src={sm_img_3}/>
            </div>
            </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='main-product-details'>
            <div className='border-bottom'>
              <span>{title}</span>
            </div>
            <div className='border-bottom py-3'>
              <p className='price'></p>
              <div className='d-flex align-items-center gap-10'>
              
              <ReactStars value='3' edit={false} count={5} size={24} activeColor="#ffd700"  />
              <p className='mb-0'> 2 reviews</p>
              
              </div>  
              <a className='write-review' href='#review'>write a review</a>
            </div>
            <div className='border-bottom py-3'>
            <div className=' my-4  gap-10 '>
                <h3 className='product-heading mb-3'>description:</h3>
                <p className='product-data'>{desc}</p>
              </div>
            <div className=' my-4 d-flex gap-10 align-items-center'>
                <h3 className='product-heading'>category:</h3>
                <p className='product-data'>{category}</p>
              </div>
              <div className=' my-4 d-flex gap-10 align-items-center'>
                <h3 className='product-heading'>brand:</h3>
                <p className='product-data'>{brand} </p>
              </div>
             
              <div className=' my-4 d-flex gap-10 align-items-center'>
                <h3 className='product-heading'>price:</h3>
                <p className='product-data'>{price}</p>
              </div>

              <div className=' my-4 d-flex gap-10 align-items-center'>
                <h3 className='product-heading'>availability:</h3>
                <p className='product-data'>in stock</p>
              </div>

              <div className=' my-4 d-flex gap-10 flex-column my-2'>
                <h3 className='product-heading'>size:</h3>
               <div className='d-flex flex-wrap gap-15'>
                <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                <span className='badge border border-1 bg-white text-dark border-secondary'>L</span>
                <span className='badge  border border-1 bg-white text-dark border-secondary'>XL</span>
               </div>
              </div>

             

              <div className=' my-4 d-flex gap-10 flex-row align-items-center my-2'>
                <h3 className='product-heading'>quantity:</h3>
                <div className='d-flex align-items-center gap-30'>
               
                </div>
                
                <div className=''>
                  <input className='form-control' min={1} max={10} style={{'width':'100px'}} type='number'/>
                
                </div>
               
              </div>
              <div className='d-flex align-items-center gap-15'>
                <div>

                  <a className='compare' href=''><AiOutlineHeart className='fs-5'/> add to compare</a>
                
                </div>
                <div> <a className='compare' href=''><BiGitCompare className='fs-5'/> add to wishlist</a>
                
                </div>
                
                
              </div>
              <div className=' my-4 d-flex flex-column gap-10 my-3 '>
                <h3 className='product-heading'>shipping and returns:</h3>
                <p className='product-data'>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.</p>
              </div>

              <div className=' my-4 d-flex flex-column gap-10 my-3'>
                <h3 className='product-heading '>materials:</h3>
                <p className='product-data'>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir.</p>
              </div>


            </div>
            </div>
          </div>
         

          
        </div>
      </div>
      </div>
      <div className='description-wrapper py-5 home-wrapper-2'>
      <div className='container'>
          <div className='row'>
            <div className='col-12'>
             <div className='bg-white p-3'>
             <h4>description</h4>
            <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
             </div>
            </div>
          </div>
        </div>
      </div>
      <section className='reviews-wrapper py-5 home-wrapper-2'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='review-inner-wrapper'>
              <div className='reviews-head d-flex justify-content-between align-items-end'>
              <div>
              <h4 className='mb-2'>customer reviews</h4>
              <div className='d-flex align-items-center gap-10'>

             
              <ReactStars value='3' edit={false} count={5} size={24} activeColor="#ffd700"  />
              <p className='mb-0'>based on 2 reviews</p>
              </div>
              </div>
             
                  <div>
                <a className='text-dark text-decoration-underline' href=''>write a review</a>
                 </div>
               
                
            </div>

            <div id='review' className='review-form py-4'>
             
            <h4 className='mb-2'>write a review</h4>
            <form className='d-flex flex-column gap-15'>
              <div>
              <ReactStars value='3' edit={true} count={5} size={24} activeColor="#ffd700"  />

              </div>
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
                <div className='d-flex justify-content-end'>
                  <button className='button border-0' type='submit'>submit review</button>
            </div>
               </form>

            </div>
              </div>
           
            </div>
          </div>
        </div>
      </section>
      <Container class1='marque-wrapper py-5'>
      <h3 className='section-heading'>our popular products</h3>
   <div className='row'>
        <div className='col-12 marquee'>
      
          <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
          <div className='mx-4 w-25'>
            <img src='../images/tab1.jpg'/>
          </div>

          <div className='mx-4 w-25'>
            <img src='../images/headphone.jpg'/>
          </div>

          <div className='mx-4 w-25'>
            <img src='../images/tv.jpg'/>
          </div>

          <div className='mx-4 w-25'>
            <img src='../images/speaker.jpg'/>
          </div>

          <div className='mx-4 w-25'>
            <img src='../images/camera.jpg'/>
          </div>

         

            </Marquee>
          </div>
        </div>
      </div>
   </Container>
    
    </>
  )
}

export default SingleProduct