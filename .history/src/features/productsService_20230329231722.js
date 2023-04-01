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
  return response.data;
}




const productsService = {
  getAllProducts
}

export default productsService;