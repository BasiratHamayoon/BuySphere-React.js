import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const ContactUs = () => {

  const navItems = [
    {
        id: 1, title: "Home", url: '/'    
    },
    {
        id: 2, title: "Products", url: '/Products',    
    },
    {   
        id: 4, title: "About", url: '/AboutUs',
    },
    {
        id: 5, title: "Contact", url: '/ContactUs',
    },
];
const otherLinks = [
  {
    id: 1, title: "favorite", url: '/AddToFavorite'
  },
  {
    id: 2, title: "Add to Cart", url: '/AddToCart'
  },
  {
    id: 3, title: "SignUp", url: '/Signup'
  },
  {
    id: 4, title: "Login", url: '/Login'
  }
]
  return (
    <div className='bg-black text-white w-full px-[130px] py-8'>
      <div className='grid lg:grid-cols-3'>
        
        <ul className='flex flex-col gap-7'>
        <h1 className='text-[28px] font-bold'>BuySphere</h1>
          {navItems.map((item) => (
            <li>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <ul className='flex flex-col gap-7'>
        <h1 className='text-[28px] font-bold text-black'>BuySphere</h1>
          {otherLinks.map((item) => (
            <li>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>

        <ul className='flex flex-col gap-7'>
        <h1 className='text-[28px] font-bold text-black'>BuySphere</h1>
          <div className='flex justify-center items-center gap-3 text-[30px]'>
          <FaFacebookSquare />
          <FaInstagram />
          <FaTwitter />
          <FaWhatsappSquare />
          </div>
          <textarea
          id="comment"
          name="Comment"
          placeholder="Write your feedback here ...."
          className="bg-white p-2 text-gray-700"
          rows="2"
          required
        />
        <button className='border border-white py-1 w-[40%] hover:bg-white hover:text-black'>send feedback</button>
        </ul>

      </div>
      
       
    </div>
  )
}

export default ContactUs
