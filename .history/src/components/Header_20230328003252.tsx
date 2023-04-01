import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='container bg-mainPrimary '>
      <div className='flex flex-row justify-between items-center py-2'>
        <div>
          <h1
            className='
            text-4xl font-bold text-white italic
          '
          >
            SheepFish
          </h1>
        </div>
        <div className='flex flex-row justify-between space-x-5'>
          <div className='text-2xl font-bold text-white hover:text-textSecondary '>
            Products
          </div>
          <div>Add Product</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
