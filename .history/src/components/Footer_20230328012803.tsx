import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='bg-mainPrimary'>
      <div className='container mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center py-4'>
          <div className='text-white text-2xl font-bold'>SheepFish</div>
          <div className='flex flex-row space-x-5'>
            <div className='text-white text-xl font-bold hover:underline transition-all duration-300 cursor-pointer'>
              Products
            </div>
            <div className='text-white text-xl font-bold hover:underline transition-all duration-300 cursor-pointer'>
              Add Product
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
