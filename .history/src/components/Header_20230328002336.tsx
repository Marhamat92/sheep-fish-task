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
          <Link to='/'>
            <button className='bg-mainSecondary text-mainPrimary font-bold py-2 px-4 rounded'>
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
