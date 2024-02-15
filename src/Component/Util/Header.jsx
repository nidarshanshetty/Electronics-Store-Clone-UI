import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-20 w-svw  flex justify-around bg-blue-500 border-b-2 border-black">
      {/* LOGO */}
      <div className=" h-16 mt-2 w-40 ml-16  rounded-lg ">
        <img
          src="\Images\flip.png"
          alt=""
          className="h-16 mt-0 w-32  "
        />
      </div>

      {/* SEARCH BAR */}
      <div className="w-7/12 ">
        <input
          type="text"
          className="h-10 w-8/12  ml-32 rounded-lg mt-5  bg-white text-base pl-5 pb-1"
          placeholder="Search For Products,Brands and More"
        />
        <input type="submit" className="" />
      </div>

      {/* ADDITIONAL OPTIONS */}
      <div className="h-16 w-96 bg-white flex justify-evenly rounded-2xl mt-2 border-2 border-black">
        <div className="mt-4">
          <Link to={"/login"}>
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
