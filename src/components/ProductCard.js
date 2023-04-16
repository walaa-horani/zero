import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
  const {grid} = props
  let location = useLocation();

  return (
    <>
    <div className= {` ${location.pathname == "/store" ? `gr-${grid}`  : "col-3"} `}  >
     <Link to='product/:id'  className='product-card position-relative'>
      <div className='wishlist-icon position-absolute'>
        <button className='border-0 bg-transparent'>
        <img src='images/wish.svg'/>
        </button>
      </div>
        <div className='product-image'>
            <img src='images/watch.jpg'/>
        </div>
        <div className='product-details'>
            <h6 className='brand'>havels</h6>
            <h5 className='product-title'>
                kids headphones bulk 10 pack multi colored for students
            </h5>

            <ReactStars value='3' edit={false} count={5} size={24} activeColor="#ffd700"  />
            <p className={`description ${grid === 12 ? 'd-block': 'd-none'}`} >Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.</p>
            <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-15'>
            <button className='border-0 bg-transparent'>
            <img src='images/add-cart.svg'/>
            </button>

            <button className='border-0 bg-transparent'>
            <img src='images/view.svg'/>
            </button>

            <button className='border-0 bg-transparent'>
            <img src='images/prodcompare.svg'/>
            </button>
            
             </div>
          
           </div>
        </Link>       
    </div>

    <div className= {` ${location.pathname == "/store" ? `gr-${grid}` : "col-3"} `}  >
     <div className='product-card position-relative'>
      <div className='wishlist-icon position-absolute'>
        <Link>
        <img src='images/wish.svg'/>
        </Link>
      </div>
        <div className='product-image'>
            <img src='images/watch.jpg'/>
        </div>
        <div className='product-details'>
            <h6 className='brand'>havels</h6>
            <h5 className='product-title'>
                kids headphones bulk 10 pack multi colored for students
            </h5>

            <ReactStars value='3' edit={false} count={5} size={24} activeColor="#ffd700"  />

            <p className={`description ${grid === 12 ? 'd-block': 'd-none'}`} >Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.</p>
            <p className='price'>$100.00</p>
        </div>
        <div className='action-bar position-absolute'>
          <div className='d-flex flex-column gap-15'>
            <button className='border-0 bg-transparent'>
            <img src='images/add-cart.svg'/>
            </button>

            <button className='border-0 bg-transparent'>
            <img src='images/view.svg'/>
            </button>

            <button className='border-0 bg-transparent'>
            <img src='images/prodcompare.svg'/>
            </button>
            
             </div>
          
           </div>
        </div>       
    </div>

    </>

    
  )
}

export default ProductCard