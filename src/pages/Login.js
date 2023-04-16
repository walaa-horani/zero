import React from 'react'
import {Link} from 'react-router-dom'
import CustomInput from '../components/CustomInput'
import Meta from '../components/Meta'

const Login = () => {
  return (
    <>
 <Meta title = {'login'}/>
 
     <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-3'>login</h3>
                    <form className='d-flex  flex-column gap-15'>
                      
                      <CustomInput placeholder='email' type='email' name='email'/>

                      <CustomInput placeholder='password' type='password' name='password'/>

                        <div>
                            <Link to='/forgot-password'>forgot password</Link>

                            <div className='d-flex justify-content-center align-items-center gap-20 mt-4'>
                                <button className='button border-0  '>login</button>
                                <Link to='/signup' className='button signup ms-3'>signup</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login