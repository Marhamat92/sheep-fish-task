import React from "react";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <div className='bg-mainPrimary py-3 bottom-0 absolute'>
      <div className='container mx-auto flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-bold text-white italic text-center'>
          SheepFish
        </h1>
        <h1>Developed by Marhamat Baghirov {new Date().getFullYear()}</h1>
      </div>
    </div>
  );
};

export default Footer;
