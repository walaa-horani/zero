import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import BlogCard from '../components/BlogCard'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link ,useParams } from 'react-router-dom'
import {BiCameraHome} from 'react-icons/bi'
import { blog } from '../utils/Data'
import Container from '../components/Container'
const SingleBlog = () => {
  const {blogId} = useParams()
  const blogs = blog.find((sinblog) => sinblog.id === blogId)
  const {image,title,price,Brand,Assembly,desc,sm_img_1,sm_img_2,sm_img_3} = blogs

  return (
    <>
     <Meta title = {'single blog'}/>
       <BreadCrumb title ='single blog'/>
       <div className='blog-wrapper home-wrapper-2 py-5'>
        <Container >
            <div className='row '>
            <Link className='arrow d-flex align-items-center gap-10 ' to='/blogs' >  <AiOutlineArrowLeft className='fs-5' />go to blogs</Link>
                   
               
                  
                     <div className='col-md-6'>
                        <div className='single-blog-card'>
                          
                           
                            <img src={image} className='img-fluid w-100 my-4' />
                            </div>
                            </div>
                            <div className='col-md-6 mt-4'>
                            <h3 className='title mb-4'>{title}</h3>
                            <p>{desc}</p>
                            <div className='mt-2 mb-3'>
                            <span className='text-muted'>price: </span>{price}
                            </div>
                            <div className='mt-2 mb-3'>
                            <span className='text-muted'>brand: </span>{Brand}
                            </div>

                            <div className='mt-2 mb-3'>
                            <span className='text-muted'>Assembly:</span> {Assembly}
                            </div>
                              <div className='d-flex sm-imgs'>
                                <img src={sm_img_1}/>
                                <img src={sm_img_2}/>
                                <img src={sm_img_3}/>
                              </div>
                              <hr/>

                              <div className='additional'>
                                <h4>additional details</h4>
                              <div className='d-flex align-items-center'>
                                <div>
                                  <BiCameraHome className='home-icon'/>
                                </div>
                                <div className='ms-2'>
                                  <span className=' text-muted'>Small Business</span><br/>
                                  <p className='mt-2'>This product is from a small and medium business brand based in the U.K. Support small. Learn more</p>
                                </div>
                              </div>
                              </div>
                           
                            </div>
                       
                    
               
            </div>
        </Container>
       </div>
    </>
  )
}

export default SingleBlog