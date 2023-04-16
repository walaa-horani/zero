import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { products } from '../utils/Data'
import BlogCard from '../components/BlogCard'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
const OurStore = () => {
  const [grid,setGrid] = useState(4);
  
  return (
   
    <>
    <Meta title = {'our store'}/>
    <BreadCrumb title ='our store'/>
   <div className='store-wrapper home-wrapper-2 py-5'>
      <Container >
        <div className='row '>
          <div className='col-lg-3 col-md-3 col-sm-12  '>
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

          <div className='col-lg-9 col-md-9 col-sm-12'>
      
          <div className='filter-short-grid mb-4'>
          <div className='filter-short-grid-box'>
          <div className='filter-short-grid-box-sort gap-10'>
              <p style={{'width':'100px'}} className='mb-0 d-block'>sort by:</p>
              <select className='form-control form-select'>
                <option value=''>best selling</option>
                <option value=''>alphabetically, A-Z</option>
                <option value=''>alphabetically, A-Z</option>
                <option value=''>price, low to high</option>
                <option value=''>price, high to low</option>
              </select>
            </div>
            <div className='d-flex align-items-center gap-10 grid product-block'>
            
            <div className='d-flex gap-10 align-items-center'>
            <img  src='images/gr4.svg' className='d-block img-fluid' />
            <img  src='images/gr3.svg' className='d-block img-fluid' />

              <img  src='images/gr2.svg' className='d-block img-fluid' />
              <img  src='images/gr.svg' className='d-block img-fluid' />
            </div>
            </div>
          </div>
          </div>

          <div className='products-list text-center pb-5'>
      <div className='row'>
        {products.map((product)=> {
            return <div key={product.id} className='col-lg-4 col-md-6 col-sm-12 mt-5'>
              <Link  to={`/product/${product.id}`}>
                <img className='img-fluid' src={product.image}/>
                </Link>
                <span className='text-muted d-block'>{product.title}</span>
                <strong>{product.price}</strong>
                <div className='mt-4'>
                <Link className='button' to={`/product/${product.id}`}>see details</Link>

                </div>

            </div>
        })}
   
      </div>
          </div>

          </div>
        </div>
      </Container>
   </div>
   </>
  )
}

export default OurStore