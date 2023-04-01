import React from "react";
import SearchField from "../../components/SearchField";

type Props = {};

function ProductList({}: Props) {
  return (
    <div className='container mt-6'>
      <SearchField />
    </div>
  );
}

export default ProductList;
