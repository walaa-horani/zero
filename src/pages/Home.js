import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import SpecialProducts from '../components/SpecialProducts';
import Container from '../components/Container';
import {categories} from '../utils/Data'
import {blog} from '../utils/Data'
import { special } from '../utils/Data';
import { featured } from '../utils/Data';
import banner_1 from '../images/banner 1.jpg'
import banner_2 from '../images/banner 2.jpg'
import banner_3 from '../images/banner 3.jpg'
import banner_4 from '../images/banner 4.jpg'
const Home = () => {
 
    const blogs = blog.map(singleblog => {
      return <BlogCard image = {singleblog.image} title = {singleblog.title} />
    })

    const specials = special.map(singlespecial => {
      return <SpecialProducts image = {singlespecial.image} brand = {singlespecial.brand} title = {singlespecial.title} price = {singlespecial.price} />
    })

    const featurs = featured.map(singlefeature => {
      return <BlogCard image = {singlefeature.image} brand = {singlefeature.brand} title = {singlefeature.title} price = {singlefeature.price}/>
    })
  
  return (
    <>
    <Container class1= 'home-wrapper-1 py-5'>
    <div className='row'>
        <div className='col-md-6 col-sm-12'>
        <div className='main-banner position-relative rounded-3'>
        <div className='overlay '></div>
          <img className='img-fluid ' src='images/main-banner.jpg'/>
          <div className='main-banner-content position-absolute'>
           
            <h4>supercharged for pros.</h4>
            <h5>ipad S 13+ pro.</h5>
            <p className='text-white'>from $999.00 or &41.62/mo.  <br/> fro 24 mo.footnote* </p>
            <Link className='button'>buy now</Link>
          </div>
        </div>
        </div>

        <div className='col-md-6 col-sm-12'>
          <div className='row'>
            <div className='col-6'>
          <div className='small-banner position-relative m-1'>
   
<img  className='img-fluid  rounded-3' src={banner_4} />
<div className='overlay rounded-3'></div>
<div className='small-banner-content position-absolute position-relative'>
  <h4>supercharged for pros.</h4>
  <h5>ipad S 13+ pro.</h5>
  <p>from $999.00 <br/>  or &41.62/mo.  <br/> fro 24 mo.footnote* </p>

</div>
</div>




          </div>

          <div className='col-6'>
          <div className='small-banner position-relative m-1'>

<img className='img-fluid rounded-3 position-relative'  src={banner_1}/>
<div className='overlay rounded-3'></div>
<div className='small-banner-content position-absolute'>
  <h4>best sale</h4>
  <h5>ipad S 13+ pro.</h5>
  <p>from $999.00 <br/> or &41.62/mo.  <br/> fro 24 mo.footnote* </p>
</div>

</div>




          </div>

          <div className='col-6'>
          <div className='small-banner position-relative m-1'>
         
<img className='img-fluid rounded-3 position-relative' src={banner_2}/>
<div className='overlay rounded-3'></div>
<div className='small-banner-content position-absolute'>
  <h4>new arrival</h4>
  <h5>buy ipad here</h5>
  <p>from $999.00 <br/>  or &41.62/mo.  <br/> fro 24 mo.footnote* </p>
</div>
</div>

          </div>
          
          <div className='col-6'>
          <div className='small-banner position-relative m-1'>
         
<img className='img-fluid  rounded-3 position-relative' src={banner_3}/>
<div className='overlay rounded-3'></div>
<div className='small-banner-content position-absolute'>
  <h4>new arrival</h4>
  <h5>buy ipad here</h5>
  <p>from $999.00 <br/>  or &41.62/mo.  <br/> fro 24 mo.footnote* </p>
</div>
</div>

          </div> 
          
          </div>
          </div>
      </div>
    </Container>
    <Container class1='home-wrapper-1 py-5'>
      <div className='row'>
         
            <div className='categories '>
              
            {
              
              categories?.map((i,j) => {
                return (
                  <div className=' category-box  gap-15 align-items-center'>
            <div>
              <h6>{i.title}</h6>
              <span className='text-muted'>{i.category}</span>
            </div>
            <img  src={i.image}/>
            </div>

           
                );
              })}

            
          

           
          
            </div>
          </div>
       
    </Container>
   
    <Container class1='blog-wrapper home-wrapper-1 py-5'>
    <div className='row'>
              
                <h3 className='section-heading'>our latest Blogs</h3>
                
           
                {blog.map((sinblog)=> {
            return <div  key={sinblog.id} className=' col-lg-4 col-md-6 col-sm-6 col-xs-6 mt-5 blog-card'>
            
              <div className='card-image'>
              <Link  to={`/blog/${sinblog.id}`}>
                <img className='img-fluid' src={sinblog.image}/>
                </Link>
                </div>
                <span className='text-muted d-block'>{sinblog.title}</span>
                <strong>{sinblog.price}</strong>
                <div className='mt-4'>
                <Link className='button' to={`/blog/${sinblog.id}`}>see details</Link>

                </div>

            </div>
        })}
              
                </div>
            
    </Container>

    
      <Container class1=' special-wrapper home-wrapper-1 py-5'>
      <div className='row'>
            <div className='col-12'>
                  <h3 className='section-heading'>special products</h3>
                  </div>
                  <div className='row '>
                    {specials}
                  </div>
            </div>
      </Container>
 
 
   <Container class1='marque-wrapper py-5'>
   <div className='row'>
        <div className='col-12'>
          <div className='marquee-inner-wrapper card-wrapper'>
              <Marquee className='d-flex'>
          <div className='mx-4 w-25'>
            <img src='images/brand-01.png'/>
          </div>

          <div className='mx-4 w-25'>
            <img src='images/brand-02.png'/>
          </div>

          <div className='mx-4 w-25'>
            <img src='images/brand-03.png'/>
          </div>

          <div className='mx-4 w-25'>
            <img src='images/brand-04.png'/>
          </div>

          <div className='mx-4 w-25'>
            <img src='images/brand-05.png'/>
          </div>

          <div className='mx-4 w-25'>
            <img src='images/brand-06.png'/>
          </div>

            </Marquee>
          </div>
        </div>
      </div>
   </Container>

 
<Container class1='featured-wrapper py-5'>
<div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>featured collection</h3>
            </div>
          
          
        </div>
        <div className='row'>
        
         {featurs}
         
        </div>

</Container>
   

   
    </>
  )
}

export default Home