import React from "react";
import SearchField from "../../components/SearchField";

type Props = {};

function ProductList({}: Props) {
  return (
    <div className='container'>
      <SearchField />
    </div>
  );
}

export default ProductList;
