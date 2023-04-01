import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

type Props = {};

const Header = (props: Props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const checkScreenSize = () => {
    if (window.innerWidth <= 768) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [mobileMenu]);

  return (
    <div className=' bg-mainPrimary '>
      <div className='container flex flex-row justify-between items-center py-2'>
        <div>
          <h1
            className='
            text-4xl font-bold text-white italic
          '
          >
            SheepFish
          </h1>
        </div>
        {mobileMenu ? (
          <BiMenu className='text-3xl text-white' />
        ) : (
          <div className='flex flex-row justify-between space-x-5'>
            <div
              className='text-2xl font-bold text-white hover:underline transition-all duration-300
          cursor-pointer'
            >
              Products
            </div>
            <div className='text-2xl font-bold text-white hover:underline transition-all duration-300 cursor-pointer'>
              Add Product
            </div>
          </div>
        )}
        {showMenu && (
          <div className='flex flex-col space-y-5'>
            <div
              className='text-2xl font-bold text-white hover:underline transition-all duration-300
          cursor-pointer'
            >
              Products
            </div>
            <div className='text-2xl font-bold text-white hover:underline transition-all duration-300 cursor-pointer'>
              Add Product
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
