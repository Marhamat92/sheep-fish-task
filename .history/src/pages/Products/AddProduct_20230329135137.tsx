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
          <input {...register("name")} />
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

          <input {...register("price")} />
          <p>{errors.price?.message}</p>

          <input {...register("stock")} />
          <p>{errors.stock?.message}</p>

          <input {...register("category")} />
          <p>{errors.category?.message}</p>

          <input {...register("image")} />
          <p>{errors.image?.message}</p>

          <input type='submit' />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
