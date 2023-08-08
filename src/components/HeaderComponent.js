import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";
import { CiDiscount1 } from "react-icons/ci";
import { FiUser, FiShoppingCart } from "react-icons/fi";
import { IconContext } from "react-icons";


const OnlineBar = () => {
  const isOnline = useOnline();
  return isOnline ? (
    <div data-testid="onlineStatus" className="px-1 bg-green-400">
      <p>You are Online!</p>
    </div>
  ) : (
    <div data-testid="onlineStatus" className="px-1 bg-red-500">
      <p>You are Offline! Please check your internet connection.</p>
    </div>
  );
};

const Logo = () => {
  return (
    <Link to={"/"}>
      <img
        className="w-40 h-18"
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6VGtqSw9Ki69qxyObLgFd4XcQDuNlZGVOCkQ7LTURwARWJJuYQXxw0Rk4MKfPnzL_-Y&usqp=CAU"
      />
    </Link>
  );
};

const Navbar = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div >
      <ul className="flex justify-between">
         <li className="px-2">
          <Link to={"/"}>Home</Link>
        </li> 
         
         <li className="px-2  ml-4">
            <Link to={"/about"}>About</Link>
        </li>

        <li className="px-2 ml-4">
          <link
            type="image/png"
            sizes="16x16"
            rel="icon"
            href=".../icons8-discount-16.png"
          />
         
          <div className="flex">
            <IconContext.Provider value={{ size: "1.5em" }}>
              <div className="mr-2">
                <CiDiscount1 />
              </div>
            </IconContext.Provider>
            Offers
          </div>
         
        </li> 

        <li className="px-2 ml-4">
          <Link to={"/cart"}>
            <div className="flex">
              <IconContext.Provider value={{ size: "1.5em" }}>
                <div className="mr-2">
                  <FiShoppingCart />
                </div>
              </IconContext.Provider>
              <p data-testid="cart">Cart -{cartItems.length}</p>
            </div>
          </Link>
        </li>
        <li className="px-2 ml-4">
            <Link to={"/contact"}>Contact  </Link>
                      
        </li>

        <li className="px-2 ml-4">
          <Link to={"/instamart"}>InstaMart</Link>
        </li>

        <li className="px-2 ml-4">
          
          <div className="flex">
            <IconContext.Provider value={{ size: "1.5em" }}>
              <div className="mr-2">
                <FiUser />
              </div>
            </IconContext.Provider>
             Rishab
          </div>
         </li>
          
      </ul>
    </div>
  );
};

const HeaderComponent = () => {
  
  return (
    <>
    
      <OnlineBar />
      <div className=" bg-[#FBEEDB] flex justify-between items-center  font-c font-semibold ">
        {<Logo />}
        {<Navbar />}
       
      </div>
     
    </>
  );
};

export default HeaderComponent;
