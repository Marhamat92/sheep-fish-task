import { Route, Routes } from "react-router-dom";
import React from "react";
import ProductList from "./pages/Products/ProductList";
import AddProduct from "./pages/Products/AddProduct";
import UpdateProduct from "./pages/Products/UpdateProduct";

const BaseRouter = () => (
  <Routes>
    build with react router v6
    <Route
      path="/"
      element={<ProductList />}
    >
      <Route path="add" element={<AddProduct />} />
      <Route path=":id" element={<UpdateProduct />} />
    </Route>
  </Routes>
);

export default BaseRouter;
