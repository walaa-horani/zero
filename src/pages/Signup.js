import React from 'react'
import {Link} from 'react-router-dom'
import CustomInput from '../components/CustomInput'
import Meta from '../components/Meta'


const Login = () => {
  return (
    <>
     <Meta title = {'sign up'}/>
   
    <div className='login-wrapper py-5 home-wrapper-2'>
        <div className='row'>
            <div className='col-12'>
                <div className='auth-card'>
                    <h3 className='text-center mb-3'>sign up</h3>
                    <form className='d-flex  flex-column gap-15'>
                   <CustomInput placeholder='first name' type='text' name='email'/>

                   <CustomInput placeholder='last name' type='text' name='last name'/>

                   <CustomInput placeholder='email' type='email' name='email'/>

                   <CustomInput placeholder='password' type='password' name='password'/>
                   
                       

                        <div>

                            <div className='d-flex justify-content-center align-items-center gap-20'>
                        
                                <Link to='/signup' className='button signup ms-3'>create</Link>
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