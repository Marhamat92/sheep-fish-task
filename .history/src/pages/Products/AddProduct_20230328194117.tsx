import React from "react";
import Form from "../../components/Form";

type Props = {};

const AddProduct = (props: Props) => {
  return (
    <div className='container'>
      <div className='flex flex-col items-center justify-center mt-4'>
        <h1 className='text-4xl font-bold text-textPrimary'>Add Product</h1>
        <p className='text-textSecondary text-xl'>
          Please fill all fields to add a new product!
        </p>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default AddProduct;
