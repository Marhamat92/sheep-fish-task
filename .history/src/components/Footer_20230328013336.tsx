import React from "react";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <div className='bg-mainPrimary'>
      <div className='container mx-auto flex-col'>
        <h1 className='text-4xl font-bold text-white italic text-center'>
          SheepFish
        </h1>
      </div>
    </div>
  );
};

export default Footer;
