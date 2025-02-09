import React from 'react'
import { Link } from 'react-router-dom'
import { CiHeart, CiShoppingCart, CiSearch, CiMenuBurger} from "react-icons/ci";
import { useState } from 'react';

const Navbar = () => {

    // Taking Array of Objects for Navigation of pages

    const navItems = [
        {
            id: 1, title: "Home", url: '/'    
        },
        {
            id: 2, title: "Products", url: '/Products',    
        },
        {
            id: 3, title: "Catagories", url: '/Catagories',
        },
        {   
            id: 4, title: "About", url: '/AboutUs',
        },
        {
            id: 5, title: "Contact", url: '/ContactUs',
        },
    ]

    const [isActive, setIsActive] = useState(false)
  return (
        <div className=''>
                <nav className='bg-white lg:grid lg:grid-cols-3 justify-center items-center gap-10 px-[10px] py-5'>
                    {/* Logo */}

                        <div className='flex justify-center items-center gap-4'>
                            <span className='text-[26px]'><CiMenuBurger /></span>
                            <h1 className='font-bold text-[30px] font-sans'>BuySphere</h1>    
                        </div>
                        {/* Menue */}

                        <ul className='flex justify-center items-center gap-12 font-semibold text-[17px] font-sans'>
                            {navItems.map((item, index) => (
                                    <li key={item.id} className=''>
                                            <Link to={item.url}>{item.title}</Link>
                                    </li>
                            ))}
                        </ul>
                        {/* Side Items */}

                        <ul className='flex justify-center items-center gap-3 '>
                                    <li className='text-[26px]'><CiSearch /></li>
                                    <li className='text-[26px]'><CiHeart /></li>
                                    <li className='text-[26px]'><CiShoppingCart /></li>
                                    <li className=''><button>SignUp</button></li>
                                    <li className=''><button>Login</button></li>
                        </ul>

                        {/* Mobile Menue */}

                        <div className=''>
                                    <ul className='flex flex-col justify-center items-center gap-5'> 
                                            {navItems.map((item, index) => (
                                                <li key={item.id} className=''>
                                                    <Link to={item.url}>{item.title}</Link>
                                                </li>
                            ))}

                                    </ul>
                        </div>
                        
                </nav>
        </div>
  )
}

export default Navbar
