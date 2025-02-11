import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Slices/ProductSlice"; // Ensure correct import
import pic from "../assets/pic.jpg"
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

  return (
    <div className="w-full flex justify-center items-center px-10 m-auto">
      <div className="w-[80%] grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center gap-10 py-[20px]">
      
        {products.map((product) =>{
           console.log(product)
        
        return(
          <Link to={`/ProductsDetail/${product.id}`} key={product.id}>
          <div title="Veiw Product" className="flex flex-col pb-[10px] rounded-md group h-[330px]">
            <img src={pic} alt="" />
            <div className="flex justify-between w-full px-[5px]">
              <h1 className="font-sans lg:text-[18px] text-[12px] font-semibold">{product.title}</h1>
              <span><CiHeart size={28} /></span>
            </div>
            <h1 className="font-sans lg:text-[16px] text-[10px] text-gray-600">Price: ${product.price}.00</h1>
            <div className="flex justify-between items-center px-[5px] py-[10px]">
            <p className="bg-gray-300 w-[20%] text-center rounded-sm text-[13px]">NEW IN</p>
            <button className="bg-black text-white w-[50%] py-[5px] rounded-sm
             hover:bg-gray-600 group-hover:block  opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 
                        transition-all duration-300">Add to Cart</button>
            </div>
          </div>
          </Link>
        )})}
      
      </div>
    </div>
  );
};

export default Products;
