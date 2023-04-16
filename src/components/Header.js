import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {BsSearch} from 'react-icons/bs'
import logo from '../images/logo.png'
const Header = () => {
  return (
    <>
    <header className='header-top-strip py-3'>
    <div className='container-xxl'>
     <i class="fa fa-bars " aria-hidden="true"></i>
    <div className='row free align-items-center'>

      <div className='col-4  '>
        <p className='text-white mb-0'>free shipping over 100$</p>
      </div>

      <div className='col-4 mb-0 '>
      <Link  className=''><img src={logo}/> </Link>
      </div> 
      <div className='col-4'>
        <p className='end text-white mb-0'>hotline:  <a className='text-white' href='#'>0505 1121 303</a> </p>
      </div>
    </div>

    </div>
    </header>

    <header className='header-upper py-3'>
      <div className='container'>
        <div className='row '>
          <div className='col-lg-2 col-md-2 col-sm-2 text-center'>
           
            <Link  className=''><img src={logo}/> </Link>
           
            
          </div>
          <div className='col-lg-5 col-md-10 col-sm-10'>
          <div class="input-group mb-3">
  <input type="text" class="form-control py-2" placeholder="search product..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text p-3" id="basic-addon2"><BsSearch/></span>
</div>
          </div>
         

          <div className='col-lg-5 col-md-12 compare-col'>
            <div className='header-upper-links d-flex  justify-content-between align-items-center'>
                <div>
                  
                  <Link  className='d-flex   ms-2  text-white'>
                  <img src='images/compare.svg'></img>
                  <p className='ms-1'>
                   compare 
                  </p>
                </Link>
                </div>
                <div>
                  
                  <Link  className='d-flex  ms-2   text-white'>
                
                <img src='images/wishlist.svg'></img>
                 <p className='ms-1'>
                 wishlist
                  </p>
                  
                  </Link>
                  </div>
                <div>
                                
                  <Link to='login' className='d-flex ms-2  text-white'>

                  <img src='images/user.svg'></img>
                  <p className='ms-1'>
                   login 
                  </p>
                </Link>
                
                
                </div>
                <div>
                                
                  <Link to='/cart' className='d-flex text-white'>

                  <img src='images/cart.svg'></img>
                 <div className='d-flex flex-column gap-10'>
                 
                 
                 </div>
                </Link>
               
                
                </div>
               
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <header className='header-bottom py-3' >

      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='menu-bottom d-flex align-items-center gap-30'>
              <div>
                
                <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  
  
  <img src='images/menu.svg'/>  
  
       <span className='d-inline-block'>shop categories</span>    
  </button>
  <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
    <li><Link class="dropdown-item text-white" to="#">show categories</Link></li>
    <li><Link class="dropdown-item text-white" to="#">electornics</Link></li>
    <li><Link class="dropdown-item text-white" to="#">all</Link></li>
   

         

  
  </ul>
</div>

</div>
              <div className='menu-links'>
                <div className='d-flex  gap-15'>
                  <NavLink className='text-white'  to='/'>home</NavLink>
                  <NavLink className='text-white'  to='store'>our store</NavLink>
                  <NavLink className='text-white' to='/blogs'>blogs</NavLink>
                  <NavLink className='text-white' to='/contact'>contact</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <header className=' py-3 header-bottom-mobile' >

<div className='container-xxl'>
  <div className='row'>
    <div className='col-12'>
      <div className='menu-bottom gap-30'>
        <div>
          
          <div class="dropdown">
<button class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">


<img src='images/menu.svg'/>  

 <span className='d-inline-block'>shop categories</span>    
</button>
<ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
<li><Link class="dropdown-item " to="#">show categories</Link></li>
<li><Link class="dropdown-item " to="#">electornics</Link></li>
<li><Link class="dropdown-item " to="#">all</Link></li>
                  

</ul>
</div>

</div>
        <div className='menu-links'>
          <div className=' links  gap-15'>
            <NavLink className='text-white menu-link'  to='/'>home</NavLink>
            <NavLink className='text-white menu-link'  to='store'>our store</NavLink>
            <NavLink className='text-white menu-link' to='/gallery'>gallery</NavLink>
            <NavLink className='text-white menu-link' to='/contact'>contact</NavLink>
            <li><Link  className='   gap-10 text-white'>
              <div className='d-flex align-items-center'>
              <img src='images/compare.svg'></img>
            <p className='mb-0 ms-2'> compare products </p>
              </div>
   
           </Link></li>

       

           <li><Link  className='   gap-10 text-white'>
              <div className='d-flex align-items-center'>
              <img src='images/wishlist.svg'></img>
            <p className='mb-0 ms-2'> wishlist </p>
              </div>
   
           </Link></li>

           <li><Link  className='   gap-10 text-white'>
              <div className='d-flex align-items-center'>
              <img src='images/user.svg'></img>
            <p className='mb-0 ms-2'> login/signup </p>
              </div>
   
           </Link></li>

        
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</header>
    </>
  )
}

export default Header