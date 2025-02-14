import React from "react";
import { Link } from "react-router-dom";
import { MdWorkspacePremium } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { TbNumber100Small } from "react-icons/tb";



const AboutUs = () => {
  return (
    <div className="w-full flex flex-col items-center px-10 m-auto">
      {/* Hero Section */}
      <section className="w-full text-center py-[80px]">
        <h1 className="text-[28px] font-semibold">About BuySphere</h1>
        <p className=" text-[16px] mt-3">
          Your one-stop destination for quality products and seamless shopping experiences.
        </p>
      </section>

      {/* Who We Are Section */}
      <section className="w-[80%] text-center py-[50px]">
        <h2 className="text-[28px] font-semibold">Who We Are</h2>
        <p className=" mt-4">
          At BuySphere, we are passionate about providing top-quality products at unbeatable prices. 
          Our mission is to make shopping convenient, enjoyable, and affordable for everyone.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="w-[80%] grid lg:grid-cols-2 gap-8 py-[50px]">
        <div className="flex items-center gap-4">
        <MdWorkspacePremium size={50} />
          <div>
            <h3 className="text-[20px] font-semibold">Premium Quality</h3>
            <p>We ensure all our products meet the highest standards.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
        <FaShippingFast size={50}/>
          <div>
            <h3 className="text-[20px] font-semibold">Fast & Reliable Shipping</h3>
            <p>Get your orders delivered quickly and efficiently.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
        <MdSupportAgent size={50}/>
          <div>
            <h3 className="text-[20px] font-semibold">24/7 Customer Support</h3>
            <p>We are always here to assist you with any queries.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
        <TbNumber100Small size={50} />
          <div>
            <h3 className="text-[20px] font-semibold">100% Satisfaction Guarantee</h3>
            <p>Your satisfaction is our top priority.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-[80%] text-center py-[50px] rounded-lg">
        <h2 className="text-[24px] font-semibold">Join the BuySphere Family</h2>
        <p className="text-gray-600 mt-2">
          Experience the best in online shopping. Browse our latest collections now!
        </p>
        <Link to="/" className="mt-5 inline-block bg-black text-white px-6 py-3 rounded-md hover:bg-gray-700 transition-all duration-300">
          Start Shopping
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
