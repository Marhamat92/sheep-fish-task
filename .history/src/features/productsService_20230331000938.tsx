import axios from "axios";

const API_URL = "https://dummyjson.com/products";

//GET ALL PRODUCTS
const getAllProducts = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      method: "GET",
    },
  });
  return response.data.products;
};

//DELETE PRODUCT
const deleteProduct = async (id: number) => {
  const response = await axios.delete(API_URL + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      method: "DELETE",
    },
  });
  return response.data;
};

//ADD PRODUCT with new id
const addProduct = async (product: any) => {
  const response = await axios.post(`${API_URL}/add`, product, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      method: "POST",
    },
  });
  if (response.data) {
    return response.data;
  }
};

//GET PRODUCT BY ID
const getProductById = async (id: number) => {
  const response = await axios.get(API_URL + "/" + id, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      method: "GET",
    },
  });
  return response.data;
};

//UPDATE PRODUCT BY ID
const updateProduct = async (product: any, id: number) => {
  const response = await axios.put(API_URL + "/" + id, product, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      method: "PUT",
    },
  });
  return response.data;
};

//GET ALL CATEGORİES
const getAllCategories = async () => {
  const response = await axios.get(API_URL + "/categories", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      method: "GET",
    },
  });
  return response.data;
};

//GET PRODUCTS BY CATEGORY
const getProductsByCategory = async (category: string) => {
  const response = await axios.get(API_URL + "/category/" + category, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      method: "GET",
    },
  });
  return response.data.products;
};

const productsService = {
  getAllProducts,
  deleteProduct,
  addProduct,
  getProductById,
  updateProduct,
  getAllCategories,
  getProductsByCategory,
};

export default productsService;
