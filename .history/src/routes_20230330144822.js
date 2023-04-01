import { Route, Routes } from "react-router-dom";
import React from "react";
import ProductList from "./pages/Products/ProductList";
import AddProduct from "./pages/Products/AddProduct";
import UpdateProduct from "./pages/Products/UpdateProduct";

const BaseRouter = () => (
  <Routes>
    <Route path="/" element={<ProductList />} />
    <Route path="/add" element={<AddProduct />} />
    <Route path="/update/:id" element={<UpdateProduct />} />
    <Route path="*" element={<h1>404: Not Found</h1>} />
  </Routes>
);

export default BaseRouter;
