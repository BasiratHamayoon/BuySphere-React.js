import React from 'react';
import image from "../assets/HeroSection-images/image.png";
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (

    <div>
        <div className='flex justify-center items-center flex-wrap gap-14 bg-pink-100 py-[50px] h-[70vh]'>
          <div className='flex flex-col'>
            <h1 className='font-semibold text-[22px] font-sans'>CLASSIC EXCLUSIVE</h1>
            <h1 className='font-serif text-[28px] font-bold'>Womens Collection </h1>
            <h2 className='font-sans text-[20px]'>UPTO 50% OFF</h2>
            <Link to={"/Products"}><button className='bg-black text-white py-2 rounded-md shadow-md
            shadow-black w-[50%] my-2 hover:bg-gray-500 border border-white'>Shop Now</button></Link>
          </div>
          <div className='flex justify-center items-center pl-[50px]'>
            <img src={image} className=''/>
          </div>
        </div>
    </div>
  );
}

export default HeroSection;
