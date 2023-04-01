import React from "react";
import SearchField from "../../components/SearchField";
import ListTable from "../../components/ListTable";

type Props = {};

function ProductList({}: Props) {
  const rows = [
    { id: 1, name: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
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
