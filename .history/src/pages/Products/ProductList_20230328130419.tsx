import React from "react";
import SearchField from "../../components/SearchField";

type Props = {};

function ProductList({}: Props) {
  return (
    <div className='container mt-6'>
      <div className='flex justify-between'>
        <div>
          <SearchField />
        </div>
        <div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
