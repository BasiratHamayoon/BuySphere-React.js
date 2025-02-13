import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { addToCart } from '../Slices/CartSlice';
import { toggleFavorite } from '../Slices/FavoriteSlice';

const ProductsDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products } = useSelector((state) => state.products)

  const handleCartProduct = (product) => {
      dispatch(addToCart(product));
      console.log(product)
    }
    
  const product = products.find((item) => item.id === parseInt(id));
  console.log(product)
  return (
    <div className='w-full flex justify-center items-center'>
       <div className='lg:w-[80%] w-[95%] grid lg:grid-cols-2  py-[50px] h-[400px]'>
             <div className=''>
              <img src={product?.image} alt="" className='w-[350px] h-[400px]'/>
             </div>
             <div className='border-2 border-black px-5 py-4 flex flex-col justify-items-start h-[400px]'>
              <h1 className='font-bold text-[25px] font-sans'>Product Details</h1>
            
              <h1 className='font-semibold font-sans text-[22px]'>{product?.title}</h1>
              
              <p className='text-[15px] text-gray-700 border-b pb-[10px]'>{product?.description}</p>
              <table className='flex justify-center items-center w-full py-[20px]'>
                <tr className='flex justify-center items-center gap-4'>
                  <td className='border border-black px-[10px] py-[4px] bg-black text-white font-semibold
                  hover:bg-gray-600 w-[30%]'>XS</td>
                  <td className='border border-black px-[10px] py-[4px] bg-black text-white font-semibold
                  hover:bg-gray-600 w-[30%]'>S</td>
                  <td className='border border-black px-[10px] py-[4px] bg-black text-white font-semibold
                  hover:bg-gray-600 w-[30%]'>M</td>
                  <td className='border border-black px-[10px] py-[4px] bg-black text-white font-semibold
                  hover:bg-gray-600 w-[30%]'>XL</td>
                </tr>
              </table>
              <p className='text-[18px] font-sans font-semibold text-center'>Price: ${product?.price}.00</p>
              <button className='bg-black text-white w-[70%] py-2 m-auto my-[5px]
              rounded-md  hover:bg-gray-600' onClick={() => handleCartProduct(product)}>Add to Cart</button>
             </div>
       </div>
    </div>
  )
}

export default ProductsDetail
