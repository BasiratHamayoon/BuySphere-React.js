import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import AboutUs from "./Pages/AboutUs"
import ContactUs from './Pages/ContactUs'
import Navbar from './CustomComponents/Navbar'
import AddToCart from './Pages/AddToCart'
import AddToFavorite from './Pages/AddToFavorite'
import ProductsDetail from './Pages/ProductsDetail'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Footer from './CustomComponents/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
             <ToastContainer position="top-right" autoClose={2000} />
            {/* Navbar */}
            <Navbar />

            <Routes>      
                  <Route path='/' element={ <Home /> }/>
                  <Route path='/Products' element={<Products />} />
                  <Route path='/AboutUs' element={<AboutUs />}/>
                  <Route path='/ContactUs' element={<ContactUs />}/>
                  <Route path='/AddToCart' element={<AddToCart />}/>
                  <Route path='/AddToFavorite' element={<AddToFavorite />}/>
                  <Route path='/ProductsDetail/:id' element={<ProductsDetail />}/>
                  <Route path='/Signup' element={<SignUp />} />
                  <Route path='/Login' element={<Login />} />
            </Routes>

            {/* Footer */}
            <div id='ContactUS'>
              <Footer />
            </div>
            
    </>
  )
}

export default App
