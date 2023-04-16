import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact  from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import SingleBlog from './pages/SingleBlog';
import SingleProduct from './pages/SingleProduct';
import Checkout from './pages/Checkout'
import Cart from './pages/Cart';
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element = {<Home/>}/>
      <Route path = 'about' element = {<About/>}/>
      <Route path = 'contact' element = {<Contact/>}/>
      <Route path = 'store' element = {<OurStore/>}/>
      <Route path = '/product/:productId' element = {<SingleProduct/>}/>
      <Route path = 'blogs' element = {<Blog/>}/>
      <Route path = 'blog/:blogId' element = {<SingleBlog/>}/>
     
      <Route path = 'login' element = {<Login/>}/>
      <Route path = 'signup' element = {<Signup/>}/>
      <Route path = 'forgot-password' element = {<ForgotPassword/>}/>
      
      <Route path = 'cart' element = {<Cart/>}/>
      <Route path = 'checkout' element = {<Checkout/>}/>
      </Route>
     </Routes>
     
     </BrowserRouter>
    </>
  );
}

export default App;
