import React from 'react'
import {Link} from 'react-router-dom'
import CustomInput from '../components/CustomInput'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'

const ForgotPassword = () => {
  return (
    <div>
             <Meta title = {'forgot password'}/>


        
        <div className='login-wrapper py-5 home-wrapper-2'>
    <div className='row'>
        <div className='col-12'>
            <div className='auth-card'>
                <h3 className='text-center mb-4 mt-4'>create a new password</h3>
              
                <form className='d-flex  flex-column gap-15'>
               
                <CustomInput placeholder='new password' type='password' name='password'/>


                <CustomInput placeholder='retype password' type='password' name='password'/>

                   

                    <div>

                        <div className='d-flex justify-content-center align-items-center gap-20'>
                            <button className='button border-0  '>login</button>
                            <Link to='/login' className='button signup ms-3'>cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default ForgotPassword