import React from "react";
import Form from "../../components/Form";

type Props = {};

const AddProduct = (props: Props) => {
  const [product, setProduct] = React.useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    category: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <div className='container flex flex-col'>
      <div className='flex flex-col items-center justify-center mt-4'>
        <h1 className='text-4xl font-bold text-textPrimary'>Add Product</h1>
        <p className='text-textSecondary text-xl text-center'>
          Please fill all fields to add a new product!
        </p>
      </div>
      <div>
        <Form
          formSubmit={handleSubmit}
          name={product.name}
          description={product.description}
          price={product.price}
          stock={product.stock}
          category={product.category}
          image={product.image}
        />
      </div>
    </div>
  );
};

export default AddProduct;
