import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Slices/ProductSlice"; // Ensure correct import
import { addToCart } from '../Slices/CartSlice'
import { toggleFavorite } from "../Slices/FavoriteSlice";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeaturedProducts = () => {
 const dispatch = useDispatch();
   const { products, isLoading, message } = useSelector((state) => state.products);
   const favoriteProducts = useSelector((state) => state.favorite.favoriteProducts);
 
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
 
   //Cart Handling
   
   const handleCartProduct = (product) => {
     dispatch(addToCart(product));
     toast.success(`Product added to cart!`, {
       position: "top-right",
       autoClose: 2000,
     });
     console.log(product)
   }
 
   //Favorite Handling
 
   const handleFavoriteProduct = (product) => {
     dispatch(toggleFavorite(product))
   }
 
   //Checking the Product Already Exists in the Favorite page
   const isFavorite = (isExistId) => {
     return favoriteProducts.some((item) => item.id === isExistId);
   }
 
   return (
     <div className="w-full flex flex-col justify-center items-center px-10 m-auto">
       <h1 className="text-[25px] font-sans py-[50px]">Featured Products</h1>
       <div className="w-[80%] grid lg:grid-cols-4 md:grid-cols-2 justify-center items-center gap-10 py-[20px]">
       
         {products.slice(0, 4).map((product) =>{
            console.log(product)
         
         return(
           
           <div title="Veiw Product" className="flex flex-col pb-[10px] rounded-md group h-[380px]" key={product.id}>
             <Link to={`/ProductsDetail/${product.id}`} >
             <img src={product.image} alt="" className="w-[180px] h-[200px]" />
             </Link>
             <div className="flex justify-between w-full px-[5px]">
               <h1 className="font-sans lg:text-[14px] text-[12px]">{product.title}</h1>
               <span onClick={() => handleFavoriteProduct(product)}
                 className="cursor-pointer">{isFavorite(product.id) ? <FaHeart size={28} /> : <CiHeart size={28} />}</span>
             </div>
             <h1 className="font-sans lg:text-[16px] text-[10px] text-gray-600">Price: ${product.price}.00</h1>
             
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
}

export default FeaturedProducts;
