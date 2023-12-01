import React from 'react'
import Home from './pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './components/header/Header'
import Products from './components/products/Products'
import Cart from './components/cart/Cart'

export default function App() {

  return (
    <>
        <Header></Header>
        <Routes>
            <Route path='/'  element={<Products></Products>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
        </Routes>
      

    </>
  )
}
