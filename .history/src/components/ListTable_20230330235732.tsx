import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, reset } from "../features/productsSlice";

type Props = {
  dataRows: any;
};

const ListTable = ({ dataRows }: Props) => {
  const dispatch = useDispatch();
  const { products, isLoading, isError, message } = useSelector(
    (state: any) => state.products || {}
  );

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "name",
      headerName: "Product Name",
      width: 150,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 150,
      editable: true,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "rating",
      headerName: "Rating",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
      editable: true,
    },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      editable: true,
      renderCell: (params) => {
        return (
          <img
            className='w-10 h-10 rounded-full'
            src={params.row.image}
            alt=''
          />
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className='flex flex-row items-center'>
            <Link
              className='text-lg text-blue-500 cursor-pointer'
              to={"update/" + params.row.id}
            >
              <button className='productListEdit'>Edit</button>
            </Link>
            <AiFillDelete
              onClick={() => {
                dispatch(deleteProduct(params.row.id) as any);
                dispatch(reset());
              }}
              className='text-xl text-red-500 cursor-pointer ml-4'
            />
          </div>
        );
      },
    },
  ];

  const rowId = dataRows.map((row: any) => row.id);

  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={dataRows}
        getRowId={rowId as any}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default ListTable;
