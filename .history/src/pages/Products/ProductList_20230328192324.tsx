import React from "react";
import SearchField from "../../components/SearchField";
import ListTable from "../../components/ListTable";

type Props = {};

function ProductList({}: Props) {
  const rows = [
    { id: 1, name: "Snow", description: "Jon", price: 35 },
    { id: 2, name: "Lannister", description: "Cersei", price: 42 },
    { id: 3, name: "Lannister", description: "Jaime", price: 45 },
    { id: 4, name: "Stark", description: "Arya", price: 16 },
    { id: 5, name: "Targaryen", description: "Daenerys", price: null },
    { id: 6, name: "Melisandre", description: null, price: 150 },
    { id: 7, name: "Clifford", description: "Ferrara", price: 44 },
    { id: 8, name: "Frances", description: "Rossini", price: 36 },
    { id: 9, name: "Roxie", description: "Harvey", price: 65 },
  ];

  return (
    <div className='container mt-6'>
      <div className='flex justify-between items-center'>
        <div>
          <SearchField />
        </div>
        <div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Add Product
          </button>
        </div>
      </div>
      <div className='mt-6'>
        <ListTable dataRows={rows} />
      </div>
    </div>
  );
}

export default ProductList;