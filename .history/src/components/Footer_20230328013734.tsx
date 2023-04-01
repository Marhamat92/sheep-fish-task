import React from "react";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <div className='bg-mainPrimary py-3 '>
      <div className='container mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-white italic text-center'>
          SheepFish
        </h1>
        <p className='text-white font-regular text-lg'>
          Developed by Marhamat Baghirov {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
