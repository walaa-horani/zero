import React from 'react'
import { Link } from 'react-router-dom'
const BreadCrumb = (props) => {
   
  return (
    <div className='breadcrumb py-4'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <p ><Link className='text-dark' to='/'>home </Link> / {props.title}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BreadCrumb