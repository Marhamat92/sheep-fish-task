import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='container bg-mainPrimary py-2 '>
      <div className='flex flex-row justify-between'>
        <div>
          <h1
            className='
            text-3xl 
          '
          >
            SheepFish
          </h1>
        </div>
        <div className='flex flex-row justify-between space-x-5'>
          <div>Products</div>
          <div>Add Product</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
