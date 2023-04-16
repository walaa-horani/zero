import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import BlogCard from '../components/BlogCard'
import { blog } from '../utils/Data'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
const Blog = () => {
  

  return (
    <>
       <Meta title = {'blogs'}/>
       <BreadCrumb title ='blogs'/>
       <div className='blog-wrapper home-wrapper-2 py-5'>
        <Container >
            <div className='row'>
                <div className='col-lg-3 col-md-3 col-sm-12'>
                <p className='filter'>
  <a class="" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    filter
  </a>
 
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
  <div className='filter-card mb-3'>
              <h3 className='filter-title'>shop by categories</h3>
              <div>
                <ul className='ps-0'>
                  <li>watch</li>
                  <li>TV</li>
                  <li>camera</li>
                  <li>laptop</li>
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>filter by</h3>
             <div>
              <h5 className='sub-title'>availabilty</h5>
             <div>
             <div className='form-check'>
                <input className='form-check-input' type='checkbox' value='' checked/>
             <label className='form-check-label'>In stock (1)</label>
              </div>

              <div className='form-check'>
                <input className='form-check-input' type='checkbox' value='' />
             <label className='form-check-label'>out of stock (0)</label>
              </div>
             </div>
             <h5 className='sub-title'>price</h5>
              <div className='d-flex align-items-center gap-10'>

                
              <div className="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">from</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">to</label>
              </div>
             
             
              </div>
             
              <h5 className='sub-title'>size</h5>
              <div>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' value='' checked/>
             <label className='form-check-label'> S (2)</label>
              </div>

              <div className='form-check'>
                <input className='form-check-input' type='checkbox' value='' checked/>
             <label className='form-check-label'> M (4)</label>
              </div>

              <div className='form-check'>
                <input className='form-check-input' type='checkbox' value='' checked/>
             <label className='form-check-label'> L (1)</label>
              </div>  
              
              </div>
             </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>product tags</h3>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>random product</h3>
            </div>
  </div>
</div>       
<div className='filter-card-none'>
            <div className='filter-card mb-3 '>
              <h3 className='filter-title'>shop by categories</h3>
              <div>
                <ul className='ps-0'>
                  <li>watch</li>
                  <li>TV</li>
                  <li>camera</li>
                  <li>laptop</li>
                </ul>
              </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>filter by</h3>
             <div>
              <h5 className='sub-title'>availabilty</h5>
             <div>
             <div className='form-check'>
                <input className='form-check-input' type='checkbox' value='' checked/>
             <label className='form-check-label'>In stock (1)</label>
              </div>

              <div className='form-check'>
                <input className='form-check-input' type='checkbox' value='' />
             <label className='form-check-label'>out of stock (0)</label>
              </div>
             </div>
             <h5 className='sub-title'>price</h5>
              <div className='d-flex align-items-center gap-10'>

                
              <div className="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">from</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">to</label>
              </div>
             
             
              </div>
              
              <h5 className='sub-title'>size</h5>
              <div>
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' value='' checked/>
             <label className='form-check-label'> S (2)</label>
              </div>

              <div className='form-check'>
                <input className='form-check-input' type='checkbox' value='' checked/>
             <label className='form-check-label'> M (4)</label>
              </div>

              <div className='form-check'>
                <input className='form-check-input' type='checkbox' value='' checked/>
             <label className='form-check-label'> L (1)</label>
              </div>  
              
              </div>
             </div>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>product tags</h3>
            </div>
            <div className='filter-card mb-3'>
              <h3 className='filter-title'>random product</h3>
            </div>
            </div>
           
           
          </div>
          <div className='col-9 m-auto'>
                    <div className='row'>
                    {blog.map((sinblog)=> {
            return <div key={sinblog.id} className=' col-md-6 col-lg-4 col-sm-12 mt-5 blog-img'>
                <img className='img-fluid' src={sinblog.image}/>
                <span className='text-muted d-block'>{sinblog.title}</span>
                <strong>{sinblog.price}</strong>
                <div className='mt-4'>
                <Link className='button' to={`/blog/${sinblog.id}`}>see details</Link>

                </div>

            </div>
        })}

                      
                    </div>
                </div>
                </div>
                
            </Container>
        </div>
       

    </>
  )
}

export default Blog