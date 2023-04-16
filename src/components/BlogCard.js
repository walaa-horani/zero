import React from 'react'
import { Link } from 'react-router-dom'
import blog from '../images/blog-1.jpg'
const BlogCard = (props) => {
  return (
 
    <div className='col-lg-4 col-md-4 col-sm-6 mt-4 position-relative'>
    <div className='blog-card'>
      <div className='card-image'>
        <img className='' src={props.image}/>
      </div>
      <div className='blog-content'>
        <p className='date'>{props.date}</p>
        <h5 className='title'>{props.title} </h5>
        <strong>{props.price}</strong>
      
        <p className='description'>{props.description} </p>
        
       
      </div>
    </div>
    </div>
   
  )
}

export default BlogCard