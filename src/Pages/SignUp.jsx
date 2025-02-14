import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app from "../../firebaseConfig";

const SignUp = () => {
  const auth = getAuth(app);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const provider = new GoogleAuthProvider();
  const signUpWithGoogle = () => {
    signInWithPopup(auth, provider)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const data = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      if (data.user) {
        alert("User Added to Firebase!");
        navigate("/");
      }
    } catch (error) {
      console.error("Firebase Auth Error:", error.code, error.message);
  
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already registered. Please log in instead.");
        navigate("/login"); // Redirect user to the login page
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email format. Please enter a valid email.");
      } else if (error.code === "auth/weak-password") {
        alert("Weak password. Please enter at least 6 characters.");
      } else {
        alert(`Error: ${error.message}`);
      }
    }
  
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="flex justify-center items-center py-5 bg-gray-50">
      <div className="flex flex-col justify-center items-center gap-6 py-14 lg:w-[35%] md:w-[60%] w-[90%] shadow-md px-[20px] bg-white rounded-md">
        <h1 className="text-[22px] font-semibold font-sans">Sign Up</h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
          {/* Email Input */}
          <label htmlFor="email" className="w-[80%]">
            <div className="pl-[8px] border border-gray-400 py-[8px] px-[10px] rounded-md">
              <input
                type="email"
                className="w-full focus:outline-none"
                placeholder="Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </label>

          {/* Password Input */}
          <label htmlFor="password" className="w-[80%]">
            <div className="pl-[8px] border border-gray-400 py-[8px] px-[10px] rounded-md">
              <input
                type="password"
                className="w-full focus:outline-none"
                placeholder="Password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </label>

          <p className="text-[12px] text-gray-500">OR</p>

          {/* Google Sign Up Button */}
          <button
            type="button"
            className="flex justify-center items-center gap-2 text-gray-500  px-4 py-2 cursor-pointer"
            onClick={signUpWithGoogle}
          >
            <p>Sign Up with Google</p>
            <FaGoogle />
          </button>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white px-[30px] py-2 w-[80%] rounded-md shadow-md shadow-black hover:bg-gray-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
