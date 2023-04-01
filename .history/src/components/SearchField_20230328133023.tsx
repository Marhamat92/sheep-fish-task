import React from "react";

type Props = {};

const SearchField = (props: Props) => {
  return (
    <div>
      <label
        className='block text-gray-700 text-sm font-bold mb-2'
        htmlFor='search'
      >
        Search
      </label>

      <input
        type='text'
        name='search'
        id='search'
        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
      />
    </div>
  );
};

export default SearchField;
