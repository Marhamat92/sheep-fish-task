import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

type Props = {};

const Header = (props: Props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
          <BiMenu
            onClick={() => {
              setShowMobileMenu(true);
            }}
            className='text-3xl text-white'
          />
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
        {showMobileMenu && (
          <div className='bg-mainTertiary h-screen absolute top-0 left-0 right-0 '>
            <div className='flex flex-col justify-center items-center'>
              <div className='text-2xl font-bold text-white hover:underline transition-all duration-300 cursor-pointer'>
                Products
              </div>
              <div className='text-2xl font-bold text-white hover:underline transition-all duration-300 cursor-pointer'>
                Add Product
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
