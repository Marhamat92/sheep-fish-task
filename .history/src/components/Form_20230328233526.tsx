import React from "react";

type Props = {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  image: string;
  formSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setName: (name: string) => void;
  setDescription: (description: string) => void;
  setPrice: (price: number) => void;
  setStock: (stock: number) => void;
  setCategory: (category: string) => void;
  setImage: (image: string) => void;
};

const Form = ({
  name,
  description,
  price,
  stock,
  category,
  image,
  setStock,
  setName,
  setDescription,
  setPrice,
  setCategory,
  setImage,
  formSubmit,
}: Props) => {
  return (
    <div className='mt-5 flex items-center justify-center'>
      <form onSubmit={formSubmit} className='flex flex-col lg:w-auto'>
        <div className='flex flex-col'>
          <label
            htmlFor='name'
            className='text-textSecondary text-sm font-medium'
          >
            Name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type='text'
            id='name'
            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md pl-2  '
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
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            id='description'
            rows={3}
            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md pl-2'
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
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
            type='number'
            id='price'
            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md pl-2'
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
            onChange={(e) => {
              setImage(e.target.value);
            }}
            value={image}
            type='file'
            id='image'
            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md pl-2'
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
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            value={category}
            id='category'
            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md pl-2'
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
            onChange={(e) => {
              setStock(e.target.value);
            }}
            value={stock}
            type='number'
            id='stock'
            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md pl-2'
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
