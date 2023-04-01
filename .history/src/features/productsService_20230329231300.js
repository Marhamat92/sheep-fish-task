import axios from 'axios';

const API_URL = 'https://dummyjson.com/products'

//GET ALL PRODUCTS
const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
}




const productsService = {
  getAllProducts
}

export default productsService;