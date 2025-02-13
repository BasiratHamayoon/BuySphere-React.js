import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoClose } from "react-icons/io5";
import { removeFromCart } from '../Slices/CartSlice';

const AddToCart = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveProduct = (product) => {
    dispatch(removeFromCart(product));
  }

  if (cartProducts.length === 0) {
    return <p className='text-center mt-[200px] text-[20px] text-gray-600'>Cart Is Empty!</p>;
  }

  return (
    <div className="w-full py-5">
      <h2 className="text-center text-[24px] font-semibold mb-6">Your Cart</h2>
      <table className='lg:w-[80%] w-[95%] m-auto table-auto text-center'>
        <thead>
          <tr className="bg-gray-200">
            <th className="lg:px-4 px-2 py-2">Product</th>
            <th className="lg:px-4 px-2 py-2">Title</th>
            <th className="lg:px-4 px-2 py-2">Quantity</th>
            <th className="lg:px-4 px-2 py-2">Price</th>
            <th className="lg:px-4 px-2 py-2">Remove</th> {/* New Column */}
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((product, index) => (
            <tr key={index} className="">
              <td className="px-4 py-2">
                <img 
                  src={product?.image} 
                  alt={product?.title} 
                  className="lg:w-[100px] lg:h-[100px] object-cover mx-auto md:w-[70px] md:h-[70px] w-[40px] h-[40px] rounded-md"
                />
              </td>
              <td className="lg:px-4 py-2">{product?.title}</td>
              <td className="lg:px-4 py-2">1</td> 
              <td className="lg:px-4 py-2">${product?.price}.00</td>
              <td className="lg:px-4 py-2">
                <button
                  onClick={() => handleRemoveProduct(product)}
                  className="cursor-pointer transition duration-200"
                >
                  <IoClose size={24} />
                </button>
              </td> {/* Cross Icon */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddToCart;