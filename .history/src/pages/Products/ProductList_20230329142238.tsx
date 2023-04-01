import React from "react";
import SearchField from "../../components/SearchField";
import ListTable from "../../components/ListTable";
import AddModal from "../../components/Modal";
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

function ProductList({}: Props) {
  const [open, setOpen] = React.useState(false);

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

  const rows = [
    {
      id: 1,
      name: "Snow",
      description: "Jon",
      price: 35,
      stock: 12,
      rating: 4,
      category: "Electronics",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 2,
      name: "Lannister",
      description: "Cersei",
      price: 42,
      stock: 12,
      rating: 4,
      category: "Toys",
      image: "https://source.unsplash.com/random",
    },
    {
      id: 3,
      name: "Lannister",
      description: "Jaime",
      price: 45,
      stock: 12,
      rating: 4,
      category: "Electronics",
    },
    {
      id: 4,
      name: "Stark",
      description: "Arya",
      price: 16,
      stock: 12,
      rating: 4,
      category: "Electronics",
    },
    {
      id: 5,
      name: "Targaryen",
      description: "Daenerys",
      price: null,
      stock: 12,
      rating: 4,
      category: "Cars",
    },
    {
      id: 6,
      name: "Melisandre",
      description: null,
      price: 150,
      stock: 12,
      rating: 4,
      category: "Electronics",
    },
    {
      id: 7,
      name: "Clifford",
      description: "Ferrara",
      price: 44,
      stock: 12,
      rating: 4,
      category: "Mobiles",
    },
    {
      id: 8,
      name: "Frances",
      description: "Rossini",
      price: 36,
      stock: 12,
      rating: 4,
      category: "Electronics",
    },
    {
      id: 9,
      name: "Roxie",
      description: "Harvey",
      price: 65,
      stock: 12,
      rating: 4,
      category: "Electronics",
    },
  ];

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
                  type='text'
                  id='name'
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
                <input
                  className='
            mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md pl-2
          '
                  type='text'
                  id='description'
                  {...register("description")}
                />
                <p>{errors.description?.message}</p>

                <label
                  className='text-textSecondary text-sm font-medium 
           '
                  htmlFor='price'
                >
                  Price
                </label>
                <input
                  className='
            mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md pl-2
          '
                  type='number'
                  id='price'
                  {...register("price")}
                />
                <p>{errors.price?.message}</p>

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
                <p>{errors.stock?.message}</p>

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
                <p>{errors.category?.message}</p>

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
                <p>{errors.image?.message}</p>

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
