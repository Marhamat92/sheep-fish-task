import React from "react";

type Props = {
  formSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({ formSubmit }: Props) => {
  const [product, setProduct] = React.useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    category: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

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
            onChange={handleChange}
            value={product.name}
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
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            value={product.description}
            id='description'
            rows={3}
            className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md pl-2'
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
            onChange={handleChange}
            value={product.price}
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
            onChange={handleChange}
            value={product.image}
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
            onChange={(e) =>
              setProduct({ ...product, category: e.target.value })
            }
            value={product.category}
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
            onChange={handleChange}
            value={product.stock}
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
