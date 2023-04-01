import React from "react";
import SearchField from "../../components/SearchField";
import ListTable from "../../components/ListTable";

type Props = {};

function ProductList({}: Props) {
  return (
    <div className='container mt-6'>
      <div className='flex justify-between items-center'>
        <div>
          <SearchField />
        </div>
        <div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Add Product
          </button>
        </div>
      </div>
      <div className='mt-6'>
        <ListTable />
      </div>
    </div>
  );
}

export default ProductList;
