import React from "react";

type Props = {
  inputHandler: any;
};

const SearchField = ({ inputHandler }: Props) => {
  return (
    <div className='flex'>
      <div className='relative w-full'>
        <input
          onChange={inputHandler}
          type='search'
          id='search-dropdown'
          className=' 
            w-full  h-10 pl-5 pr-12 text-sm text-textPrimary placeholder-textSecondary transition-colors duration-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:border-indigo-500  
             bg-white  hover:bg-white  focus:bg-white focus:border-none
            '
          placeholder='Search product or category'
          required
        />
      </div>
    </div>
  );
};

export default SearchField;
