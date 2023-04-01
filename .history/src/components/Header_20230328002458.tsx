import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='container bg-mainPrimary'>
      <div className='flex flex-row'>
        <div>
          <h1>SheepFish</h1>
        </div>
        <div className='flex'>
          <Link to='/products'>
            <h1>Products</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
