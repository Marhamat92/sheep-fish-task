import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";

type Props = {
  dataRows: any;
};

const ListTable = ({ dataRows }: Props) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
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
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className='flex flex-row items-center'>
            <Link to={"/product/" + params.row.id}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <AiFillDelete
              onClick={() => {
                removeProduct(params.row.id);
              }}
              className='text-xl text-red-500 cursor-pointer ml-4'
            />
          </div>
        );
      },
    },
  ];

  const removeProduct = (id: any) => {
    console.log(id);
  };

  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={dataRows}
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
