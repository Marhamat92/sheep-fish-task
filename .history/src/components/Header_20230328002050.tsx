import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='container bg-mainPrimary'>
      <div className='flex flex-row'>
        <div>
          <h1>SheepFish</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
