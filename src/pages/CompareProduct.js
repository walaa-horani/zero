import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Color from '../components/Color'

const CompareProduct = () => {
  return (
    <>
    <Meta title = {'compare product'}/>
       <BreadCrumb title ='compare product'/>
       <div className='compare-product-wrapper py-5 home-wrapper-2'>
               <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src='images/cross.svg' className='position-absolute cross img-fluid'/>
                            <div className='product-card-image'>
                                <img src='images/watch.jpg' />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>honor T1 7.0 1GB RAM 8GB</h5>
                                <h6 className='price mb-2'>$100.00</h6>
                                <div>
                                    <div className='product-details '>
                                         <h5>brand:</h5>   
                                         <p>havels</p>
                                    </div>

                                    <div className='product-details '>
                                         <h5>type:</h5>   
                                         <p>watch</p>
                                    </div>

                                    <div className='product-details '>
                                         <h5>availability:</h5>   
                                         <p>in stock</p>
                                    </div>

                                    <div className='product-details '>
                                         <h5>color:</h5>   
                                        
                                        <Color/>
                                    </div>

                                    <div className='product-details '>
                                         <h5>size:</h5>   
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src='images/cross.svg' className='position-absolute cross img-fluid'/>
                            <div className='product-card-image'>
                                <img src='images/watch.jpg' />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>honor T1 7.0 1GB RAM 8GB</h5>
                                <h6 className='price mb-2'>$100.00</h6>
                                <div>
                                    <div className='product-details '>
                                         <h5>brand:</h5>   
                                         <p>havels</p>
                                    </div>

                                    <div className='product-details '>
                                         <h5>type:</h5>   
                                         <p>watch</p>
                                    </div>

                                    <div className='product-details '>
                                         <h5>availability:</h5>   
                                         <p>in stock</p>
                                    </div>

                                    <div className='product-details '>
                                         <h5>color:</h5>   
                                        
                                        <Color/>
                                    </div>

                                    <div className='product-details '>
                                         <h5>size:</h5>   
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img src='images/cross.svg' className='position-absolute cross img-fluid'/>
                            <div className='product-card-image'>
                                <img src='images/watch.jpg' />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>honor T1 7.0 1GB RAM 8GB</h5>
                                <h6 className='price mb-2'>$100.00</h6>
                                <div>
                                    <div className='product-details '>
                                         <h5>brand:</h5>   
                                         <p>havels</p>
                                    </div>

                                    <div className='product-details '>
                                         <h5>type:</h5>   
                                         <p>watch</p>
                                    </div>

                                    <div className='product-details '>
                                         <h5>availability:</h5>   
                                         <p>in stock</p>
                                    </div>

                                    <div className='product-details '>
                                         <h5>color:</h5>   
                                        
                                        <Color/>
                                    </div>

                                    <div className='product-details '>
                                         <h5>size:</h5>   
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                            <p>L</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
       </div>
    </>
  )
}

export default CompareProduct