import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Layout from "./Layout/Layout";
import BaseRouter from "./routes";

function App() {
  return (
    <div>
      <Layout>
        <BaseRouter />
      </Layout>
    </div>
  );
}

export default App;
