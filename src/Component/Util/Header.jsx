import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-20 w-svw  flex justify-around bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
      {/* LOGO */}
      <div className=" h-16 mt-2 w-40 ml-16  bg-blue-100 rounded-lg ">
        <img
          src="Images\Flipkart-logo.png"
          alt=""
          className="h-16 mt-0 w-32"
        />
      </div>

      {/* SEARCH BAR */}
      <div className="w-7/12 ">
        <input
          type="text"
          className="h-10 w-8/12  ml-32 rounded-lg mt-5  bg-blue-100 text-base pl-5 pb-1"
          placeholder="Search For Products,Brands and More"
        />
        <input type="submit" className="" />
      </div>

      {/* ADDITIONAL OPTIONS */}
      <div className="h-16 w-96 bg-blue-100 flex justify-evenly rounded-2xl mt-2 border-4">
        <div className="mt-4">
          <Link to={"/"}>
            <i className="fas fa-user mr-1"></i> login
          </Link>
        </div>
        <div className="mt-4">
          <Link to={"/"}>
            <i class="fa-solid fa-cart-shopping"></i> cart
          </Link>
        </div>
        <div className="mt-4">
          <Link to={"/"}>
            <i className="fas fa-store mr-1"></i> Become A Seller
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
