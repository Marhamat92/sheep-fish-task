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
    title: yup.string(),
    description: yup.string(),
    price: yup.number().positive(),
    stock: yup.number().positive().integer(),
    category: yup.string(),
    thumbnail: yup.string(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

const UpdateProduct = (props: Props) => {
  const { id } = useParams();
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

  useEffect(() => {
    dispatch(getProduct(id) as any);
  }, [dispatch, id]);

  const onSubmit = (data: FormData) => {
    dispatch(updateProduct({ id, data }) as any);
  };

  return (
    <div className='container flex flex-col'>
      <div className='flex flex-col items-center justify-center mt-4'>
        <h1 className='text-4xl font-bold text-textPrimary'>Update Product</h1>
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
          <label className='text-textPrimary text-lg' htmlFor='title'>
            Title
          </label>
          <input
            className='
            border border-gray-300 rounded-md
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            p-2
          '
            type='text'
            id='title'
            {...register("title")}
          />
          <p className='text-red-500 text-sm'>{errors.title?.message}</p>
          <label className='text-textPrimary text-lg' htmlFor='description'>
            Description
          </label>
          <textarea
            className='
            border border-gray-300 rounded-md
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            p-2
          '
            id='description'
            {...register("description")}
          />
          <p className='text-red-500 text-sm'>{errors.description?.message}</p>
          <label className='text-textPrimary text-lg' htmlFor='price'>
            Price
          </label>
          <input
            className='
            border border-gray-300 rounded-md
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            p-2
          '
            type='number'
            id='price'
            {...register("price")}
          />
          <p className='text-red-500 text-sm'>{errors.price?.message}</p>
          <label className='text-textPrimary text-lg' htmlFor='stock'>
            Stock
          </label>
          <input
            className='
            border border-gray-300 rounded-md
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            p-2
          '
            type='number'
            id='stock'
            {...register("stock")}
          />
          <p className='text-red-500 text-sm'>{errors.stock?.message}</p>
          <label className='text-textPrimary text-lg' htmlFor='category'>
            Category
          </label>
          <input
            className='
            border border-gray-300 rounded-md
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            p-2
          '
            type='text'
            id='category'
            {...register("category")}
          />
          <p className='text-red-500 text-sm'>{errors.category?.message}</p>
          <label className='text-textPrimary text-lg' htmlFor='thumbnail'>
            Thumbnail
          </label>
          <input
            className='
            border border-gray-300 rounded-md
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            p-2
          '
            type='text'
            id='thumbnail'
            {...register("thumbnail")}
          />
          <p className='text-red-500 text-sm'>{errors.thumbnail?.message}</p>
          <input
            className='
            bg-mainPrimary text-white rounded-md
            p-2
          '
            type='submit'
            value='Update Product'
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
