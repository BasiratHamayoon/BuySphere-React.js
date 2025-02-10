import React from 'react';
import sideImage from "../assets/HeroSection-images/simg.png"

const HeroSection = () => {
  return (
    <div className='w-[95%] m-auto bg-pink-300 grid lg:grid-cols-2 grid-cols-1 lg:h-[80vh] gap-6 justify-center items-center lg:px-[200px]'>
            <div className='flex flex-col justify-items-start items-start mt-[50px]'>
                    <h1 className='text-[25px] font-sans'>Classic Exclusive</h1>
                    <h1 className='text-[30px] font-bold font-sans'>Women's Collection</h1>
                    <h2>UPTO 40% OFF</h2>
                    <button className='bg-black text-white font-sans
                    font-semibold px-[10px] py-[5px] rounded-md shadow-md shadow-black
                    mt-[20px] border-0 lg:w-[35%] w-[50%]'>Shop Now</button>
            </div>
            <div className='flex justify-center items-center'>
                <img src={sideImage} alt="sideImage"
                className=' ' />
            </div>
    </div>
  );
}

export default HeroSection;
