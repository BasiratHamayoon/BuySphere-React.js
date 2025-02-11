import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import Catagories from "./Pages/Catagories"
import AboutUs from "./Pages/AboutUs"
import ContactUs from './Pages/ContactUs'
import Navbar from './CustomComponents/Navbar'
import AddToCart from './Pages/AddToCart'
import AddToFavorite from './Pages/AddToFavorite'
import ProductsDetail from './Pages/ProductsDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
            {/* Navbar */}
            <Navbar />

            <Routes>      
                  <Route path='/' element={ <Home /> }/>
                  <Route path='/Products' element={<Products />} />
                  <Route path='/Catagories' element={<Catagories />}/>
                  <Route path='/AboutUs' element={<AboutUs />}/>
                  <Route path='/ContactUs' element={<ContactUs />}/>
                  <Route path='/AddToCart' element={<AddToCart />}/>
                  <Route path='/AddToFavorite' element={<AddToFavorite />}/>
                  <Route path='/ProductsDetail/:id' element={<ProductsDetail />}/>
            </Routes>
    </>
  )
}

export default App
