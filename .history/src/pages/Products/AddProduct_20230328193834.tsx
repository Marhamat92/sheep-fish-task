import React from "react";

type Props = {};

const AddProduct = (props: Props) => {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <h1 className='text-4xl'>Add Product</h1>
        <p>Please fill all fields to add a new product!</p>
      </div>
    </div>
  );
};

export default AddProduct;
