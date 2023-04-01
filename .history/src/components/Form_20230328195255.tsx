import React from "react";

type Props = {};

const Form = (props: Props) => {
  return (
    <div className='mt-5 flex items-center justify-center w-full'>
      <form className='flex flex-col'>
        <div className='flex flex-col'>
          <label
            htmlFor='name'
            className='text-textSecondary text-sm font-medium'
          >
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md'
          />
        </div>
        <div className='flex flex-col mt-4'>
          <label
            htmlFor='description'
            className='text-textSecondary text-sm font-medium'
          >
            Description
          </label>
          <textarea
            name='description'
            id='description'
            rows={3}
            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md'
            defaultValue={""}
          />
        </div>
        <div className='flex flex-col mt-4'>
          <label
            htmlFor='price'
            className='text-textSecondary text-sm font-medium'
          >
            Price
          </label>
          <input
            type='number'
            name='price'
            id='price'
            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md'
          />
        </div>
        <div className='flex flex-col mt-4'>
          <label
            htmlFor='image'
            className='text-textSecondary text-sm font-medium'
          >
            Image
          </label>
          <input
            type='file'
            name='image'
            id='image'
            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md'
          />
        </div>
        <div className='flex flex-col mt-4'>
          <label
            htmlFor='category'
            className='text-textSecondary text-sm font-medium'
          >
            Category
          </label>
          <select
            name='category'
            id='category'
            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md'
          >
            <option value=''>Select a category</option>
            <option value='electronics'>Electronics</option>
          </select>
        </div>
        <div className='flex flex-col mt-4'>
          <label
            htmlFor='stock'
            className='text-textSecondary text-sm font-medium'
          >
            Stock
          </label>
          <input
            type='number'
            name='stock'
            id='stock'
            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md'
          />
        </div>
        <div className='flex flex-col mt-4'>
          <label
            htmlFor='rating'
            className='text-textSecondary text-sm font-medium'
          >
            Rating
          </label>
          <input
            type='number'
            name='rating'
            id='rating'
            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md'
          />
        </div>
        <button
          type='submit'
          className='mt-4 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded '
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Form;
