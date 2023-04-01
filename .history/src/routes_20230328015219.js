import { Route, Routes } from "react-router-dom";
import React from "react";
import ProductList from "./pages/Products/ProductList";
import AddProduct from "./pages/Products/AddProduct";

const BaseRouter = () => (
  <Routes>
    <Route exact path="/" element={
      <ProductList />
    } />
    <Route exact path="/products"
      element={
        <ProductList />
      }
    />
    <Route exact path="/products/add/" element={
      <AddProduct />
    } />
  </Routes>
);

export default BaseRouter;
