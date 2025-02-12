import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Slices/ProductSlice"; // Ensure correct import
import { toggleCart } from '../Slices/CartSlice'
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";

const Products = () => {
  const dispatch = useDispatch();
  const { products, isLoading, message } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log("Products:", products);
  if(isLoading){
    return <p className="text-center mt-[200px] text-[35px] font-semibold text-gray-500">Loading...</p>
  }
    if(message){
      return <p>Error: {message}</p>
  }

  //Cart Selector
  
  const handleCartProduct = (product) => {
    dispatch(toggleCart(product));
    console.log(product)
  }

  return (
    <div className="w-full flex flex-col justify-center items-center px-10 m-auto">
      <h1 className="text-[25px] font-sans py-[50px]">All Products</h1>
      <div className="w-[80%] grid lg:grid-cols-4 md:grid-cols-2 justify-center items-center gap-10 py-[20px]">
      
        {products.map((product) =>{
           console.log(product)
        
        return(
          
          <div title="Veiw Product" className="flex flex-col pb-[10px] rounded-md group h-[350px]" key={product.id}>
            <Link to={`/ProductsDetail/${product.id}`} >
            <img src={product.images[0]} alt="" />
            <div className="flex justify-between w-full px-[5px]">
              <h1 className="font-sans lg:text-[14px] text-[12px]">{product.title}</h1>
              <span><CiHeart size={28} /></span>
            </div>
            <h1 className="font-sans lg:text-[16px] text-[10px] text-gray-600">Price: ${product.price}.00</h1>
            </Link>
            <div className="flex justify-between items-center px-[5px] py-[10px]">
            <p className="bg-gray-300 w-[30%] text-center rounded-sm text-[10px]">NEW IN</p>
            <button className="bg-black text-white w-[50%] py-[5px] rounded-sm
             hover:bg-gray-600 group-hover:block  opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                        onClick={() => handleCartProduct(product)}>Add to Cart</button>
            </div>
          </div>
          
        )})}
      
      </div>
    </div>
  );
};

export default Products;
