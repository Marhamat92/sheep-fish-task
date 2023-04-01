import React from "react";

type Props = {};

const AddProduct = (props: Props) => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center mt-4'>
        <h1 className='text-4xl font-bold text-textPrimary'>Add Product</h1>
        <p className='text-textSecondary text-xl'>
          Please fill all fields to add a new product!
        </p>
      </div>
    </div>
  );
};

export default AddProduct;
