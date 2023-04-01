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
          className='block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300    dark:placeholder-gray-400 dark:text-white  focus:ring-transparent first-letter:
            focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-600  
            '
          placeholder='Search ...'
          required
        />
      </div>
    </div>
  );
};

export default SearchField;
