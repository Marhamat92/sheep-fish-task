import React from "react";
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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => console.log(data);

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
          flex flex-col
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
            className='
            mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md pl-2
          '
            {...register("name")}
          />
          <p>{errors.name?.message}</p>

          <label
            className='text-textSecondary text-sm font-medium 
           '
            htmlFor='description'
          >
            Description
          </label>
          <input {...register("description")} />
          <p>{errors.description?.message}</p>

          <label
            className='text-textSecondary text-sm font-medium 
           '
            htmlFor='price'
          >
            Price
          </label>
          <input {...register("price")} />
          <p>{errors.price?.message}</p>

          <label
            className='text-textSecondary text-sm font-medium 
           '
            htmlFor='stock'
          >
            Stock
          </label>
          <input {...register("stock")} />
          <p>{errors.stock?.message}</p>

          <label
            className='text-textSecondary text-sm font-medium 
           '
            htmlFor='category'
          >
            Category
          </label>
          <input {...register("category")} />
          <p>{errors.category?.message}</p>

          <label
            className='text-textSecondary text-sm font-medium 
           '
            htmlFor='image'
          >
            Image
          </label>
          <input {...register("image")} />
          <p>{errors.image?.message}</p>

          <input type='submit' />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
