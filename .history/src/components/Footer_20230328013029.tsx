import React from "react";

type Props = {
  date: Date;
};

const Footer = (props: Props) => {
  const date = new Date();

  return (
    <div className='bg-mainPrimary'>
      <div className='container mx-auto flex-col'>
        <h1 className='text-4xl font-bold text-white italic text-center'>
          SheepFish
        </h1>
        <p>Developed by Marhamat Baghirov at {date}</p>
      </div>
    </div>
  );
};

export default Footer;
