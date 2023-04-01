import axios from 'axios';

const API_URL = 'https://dummyjson.com/products'

//GET ALL PRODUCTS
const getAllProducts = async () => {
  const response = await axios.get(API_URL,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'method': 'GET'
      }

    });
  return response.data.products;
}


//DELETE PRODUCT
const deleteProduct = async (id) => {
  const response = await axios.delete(API_URL + '/' + id,
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'method': 'DELETE'
      }

    });
  return response.data;
}



const productsService = {
  getAllProducts,
  deleteProduct
}

export default productsService;