import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Props = {};

const schema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().positive().required(),
    stock: yup.number().positive().integer().required(),
    category: yup.string().required(),
    image: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const AddProduct = (props: Props) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data);

    reset();
  };

  return (
    <div className='container flex flex-col'>
      <div className='flex flex-col items-center justify-center mt-4'>
        <h1 className='text-4xl font-bold text-textPrimary'>Add Product</h1>
        <p className='text-textSecondary text-xl text-center'>
          Please fill all fields to add a new product!
        </p>
      </div>
      <div className='flex flex-col items-center justify-center mt-4'>
        <form
          className='
          flex flex-col w-full max-w-md space-y-2
        '
          onSubmit={handleSubmit(onSubmit)}
        >
          <label
            className='text-textSecondary text-sm font-medium 
           '
            htmlFor='name'
          >
            Name
          </label>
          <input
            placeholder="e.g. 'iPhone 12 Pro Max'"
            className='
            mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md pl-2
          '
            type='text'
            id='name'
            {...register("name")}
          />
          <p className='text-red-500'>{errors.name?.message}</p>

          <label
            className='text-textSecondary text-sm font-medium 
           '
            htmlFor='description'
          >
            Description
          </label>
          <input
            placeholder="e.g. 'The iPhone 12 Pro Max is the most powerful iPhone ever'"
            className='
            mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md pl-2
          '
            type='text'
            id='description'
            {...register("description")}
          />
          <p className='text-red-500'>{errors.description?.message}</p>

          <label
            className='text-textSecondary text-sm font-medium 
           '
            htmlFor='price'
          >
            Price
          </label>
          <input
            placeholder="e.g. '999.99'"
            className='
            mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md pl-2
          '
            type='number'
            id='price'
            {...register("price")}
          />
          <p className='text-red-500'>{errors.price?.message}</p>

          <label
            className='text-textSecondary text-sm font-medium 
           '
            htmlFor='stock'
          >
            Stock
          </label>
          <input
            className='
            mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md pl-2
          '
            type='number'
            id='stock'
            {...register("stock")}
          />
          <p className='text-red-500'>{errors.stock?.message}</p>

          <label
            className='text-textSecondary text-sm font-medium 
           '
            htmlFor='category'
          >
            Category
          </label>
          <input
            className='
            mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md pl-2
          '
            type='text'
            id='category'
            {...register("category")}
          />
          <p className='text-red-500'>{errors.category?.message}</p>

          <label
            className='text-textSecondary text-sm font-medium 
           '
            htmlFor='image'
          >
            Image
          </label>
          <input
            className='
            mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md pl-2
          '
            type='text'
            id='image'
            {...register("image")}
          />
          <p className='text-red-500'>{errors.image?.message}</p>

          <input
            className='
            mt-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white font-bold py-2 px-4 rounded-md cursor-pointer
          '
            type='submit'
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
