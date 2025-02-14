import React from 'react'
import { Link } from 'react-router-dom'
import { CiHeart, CiShoppingCart, CiSearch, CiMenuBurger} from "react-icons/ci";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { addToCart } from '../Slices/CartSlice';
import { toggleFavorite } from '../Slices/FavoriteSlice';
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import app from '../../firebaseConfig'

const Navbar = () => {

    const { cartProducts } = useSelector((state) => state.cart);
    const { favoriteProducts } = useSelector((state) => state.favorite);

    //Logout 
    const auth = getAuth(app)
    const navigate = useNavigate();
    const [logoutVisible, setLogoutVisible] = useState(false);
    const toggleLogoutDropDown = () => {
        setLogoutVisible(!logoutVisible);
    }
    const handleLogout = async () => {
        try{
            await signOut(auth);
            alert("SignOut Successfully!")
            navigate("/");
        } catch(error) {
            console.error(error.message);
        }
    }

    // Taking Array of Objects for Navigation of pages

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
    ]
    //Use state for Menue on mobile to open
    const [isOpen, setIsOpen] = useState(false);

  return (
        <div className='w-[100%]'>
                <nav className='bg-white grid lg:grid-cols-3 grid-cols-2 justify-center items-center gap-10 lg:px-[10px] py-5 px-[5px] w-[100%]'>
                    {/* Logo */}

                        <div className='flex justify-center items-center gap-4'>
                            <h1 className='font-bold text-[25px] font-sans'>BuySphere</h1>    
                        </div>
                        {/* Menue */}

                        <ul className='lg:flex lg:justify-center lg:items-center gap-12 font-semibold text-[17px] font-sans hidden'>
                            {navItems.map((item, index) => (
                                    <li key={item.id} className=''>
                                            <Link to={item.url}
                                            className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-black hover:after:w-full after:transition-all after:duration-300 py-1 after:rounded-4xl">{item.title}</Link>
                                    </li>
                            ))}
                        </ul>
                        {/* Side Items */}

                        <ul className='flex justify-center items-center gap-3 z-10 '>
                                    <li className='text-[26px]'><Link to={"/AddToFavorite"}>
                                    <span className='bg-black text-white w-[20px] h-[20px] rounded-full absolute text-[14px] text-center mt-[-5px] ml-[13px]'>{favoriteProducts.length}</span><CiHeart /></Link></li>
                                    <li className='text-[26px]'><Link to={"/AddToCart"}>
                                    <span className='bg-black text-white w-[20px] h-[20px] rounded-full absolute text-[14px] text-center mt-[-5px] ml-[12px]'>{cartProducts.length}</span><CiShoppingCart /></Link></li>

                                    {/* Burger Icon */}
                                    <li className='text-[24px] lg:hidden hover:shadow-md '
                                    onClick={() => setIsOpen(!isOpen)}><CiMenuBurger /></li>

                                    <li className=' hidden lg:block bg-black px-[15px] py-[6px] text-white rounded-md font-sans font-semibold cursor-pointer
                                    hover:bg-gray-700'><Link to={"/SignUp"}><button>SignUp</button></Link></li>
                                    <li className=' hidden lg:block bg-black px-[15px] py-[6px] text-white rounded-md font-sans font-semibold cursor-pointer
                                    hover:bg-gray-700'><Link to={"/Login"}><button>Login</button></Link></li>

                                    {/* Logout */}
                                    <li>
                                        <span onClick={toggleLogoutDropDown} className='cursor-pointer'><PiDotsThreeOutlineVerticalFill /></span>

                                        {logoutVisible && (
                                            
                                                <li className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md'>
                                                    <button
                                                        onClick={handleLogout}
                                                        className="w-full px-4 py-2 text-gray-700 hover:bg-gray-100
                                                        text-center"
                                                    >
                                                        Logout
                                                    </button>  
                                                </li>
                                            
                                        )}
                                    </li>
                        </ul>

                        {/* Mobile Menue */}

                        <div className={`fixed top-0 right-0 w-64 h-screen bg-white p-5 
                                    transition-transform   duration-500 ease-in-out mt-[100px] ${
                                    isOpen ? "translate-x-0" : "translate-x-full"
                                    }`}>
                                
                                    <ul className='flex flex-col justify-items-start  gap-5 top-6'> 
                                            {navItems.map((item, index) => (
                                                <li key={item.id} className="font-semibold font-sans">
                                                    <Link to={item.url}
                                                    className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-black hover:after:w-full after:transition-all after:duration-300 py-1 after:rounded-4xl">{item.title}</Link>
                                                </li>
                                                
                            ))}
                                                 <li className='bg-black text-white px-[20px] py-[6px]
                                                 text-center rounded-md font-sans font-semibold
                                                 hover:bg-gray-600 '><Link to={"/SignUp"}><button>SignUp</button></Link></li>
                                                 <li className='bg-black text-white px-[20px] py-[6px]
                                                 text-center rounded-md font-sans font-semibold
                                                 hover:bg-gray-600'><Link to={"/Login"}><button>Login</button></Link></li>

                                    </ul>
                        </div>
                        
                </nav>
        </div>
  )
}

export default Navbar
