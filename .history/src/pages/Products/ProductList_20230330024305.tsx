import React, { useEffect } from "react";
import SearchField from "../../components/SearchField";
import ListTable from "../../components/ListTable";
import AddModal from "../../components/Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllProducts,
  reset,
  addProduct,
} from "../../features/productsSlice";

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

function ProductList({}: Props) {
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const { products, isLoading, isError, message } = useSelector(
    (state: any) => state.products || {}
  );

  console.log(products, "kjjhkgjh");

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: FormData) => {
    dispatch(addProduct(data) as any);

    reset();
  };

  //map products and return product
  const rows = products?.map((product: any) => {
    return {
      key: product.id,
      id: product.id,
      name: product.title,
      description: product.description,
      price: product.price,
      stock: product.stock,
      rating: product.rating,
      category: product.category,
      image: product.thumbnail,
    };
  });

  useEffect(() => {
    dispatch(getAllProducts() as any);
  }, [dispatch]);

  return (
    <div>
      <div className='container mt-6'>
        <div className='flex justify-between items-center'>
          <div>
            <SearchField />
          </div>
          <div>
            <button
              onClick={() => setOpen(true)}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              Add Product
            </button>
          </div>
        </div>
        <div className='mt-6'>
          <ListTable dataRows={rows} />
        </div>
      </div>
      {open && (
        <AddModal
          close={() => setOpen(false)}
          open={open}
          children={
            <>
              <h1 className='text-center text-xl font-bold'>
                Enter Product Details
              </h1>
              <form
                className='
          flex flex-col    w-full max-w-md space-y-2
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
            </>
          }
        />
      )}
    </div>
  );
}

export default ProductList;
