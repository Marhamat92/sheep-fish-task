import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, reset, getProduct } from "../../features/productsSlice";
import { useParams } from "react-router-dom";

type Props = {};

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().positive().required(),
    stock: yup.number().positive().integer().required(),
    category: yup.string().required(),
    thumbnail: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const UpdateProduct = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, isLoading, isError, message } = useSelector(
    (state: any) => state.products || {}
  );

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    console.log(data.title);

    dispatch(updateProduct(data) as any);

    navigate("/products");
    reset();
  };

  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    dispatch(getProduct(id) as any);
  }, [dispatch, id]);

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
            {...register("title")}
          />
          <p className='text-red-500'>{errors.title?.message}</p>

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
            placeholder="e.g. '10'"
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
            placeholder="e.g. 'Electronics'"
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
            placeholder="e.g. 'https://www.example.com/image.jpg'"
            className='
        mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md pl-2
      '
            type='text'
            id='image'
            {...register("thumbnail")}
          />
          <p className='text-red-500'>{errors.thumbnail?.message}</p>

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

export default UpdateProduct;
