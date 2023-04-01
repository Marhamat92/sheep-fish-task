import { Route } from "react-router-dom";
import React from "react";
import ProductList from "./pages/Products/ProductList";
import AddProduct from "./pages/Products/AddProduct";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ProductList} />
    <Route exact path="/products/" component={ProductList} />
    <Route exact path="/products/add/" component={AddProduct} />
  </div>
);

export default BaseRouter;
