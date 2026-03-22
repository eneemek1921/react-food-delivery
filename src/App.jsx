import { useState } from 'react'
import './App.css'
import Menu from './components/Menu/Menu'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Burgerking from './pages/BurgerKing/BurgerKing'
import Ils from './pages/Ils/Ils'
import Kfc from './pages/Kfc/Kfc'
import Mak from './pages/Mak/Mak'
import Sv from './pages/Sv/Sv'
import Cart from './components/Cart/Cart'
import Adress from './pages/Adress/Adress'
import Buy from './pages/Buy/Buy'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <>
      <Menu />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/burgerKing' element={<Burgerking />} />
        <Route path='/ils' element={<Ils />} />
        <Route path='/kfc' element={<Kfc />} />
        <Route path='/mak' element={<Mak />} />
        <Route path='/sv' element={<Sv />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/adress' element={<Adress />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
