import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes,Route } from 'react-router'
import ShopCategory from './Pages/ShopCategory/ShopCategory';
import Shop from './Pages/Shop/Shop';
import Product from './Pages/Product/Product';
import Cart from './Pages/Cart/Cart';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
        <Route path='/product' element={<Product />} >
        <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
