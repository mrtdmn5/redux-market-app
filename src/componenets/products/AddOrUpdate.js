import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import  ProductsDetail  from "./ProductsDetail";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productsActions";
import { useParams } from "react-router-dom";

function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {

  const [product, setProduct] = useState({ ...props.product });
 
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
      
    }
  
    setProduct({ ...props.product });
   
  }, [props.product]);
 
  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
       
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/");
    });
  }
  
  return (
      
    <ProductsDetail
    
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
    > 
   
   
  
    </ProductsDetail>
  );
}
export function getProductById(products, productId) {
    
    productId=parseInt(productId);
   
  

       
  let product = products.find((product) => (product.id === productId )) || null;
 
  return product;
}

const CollectionPage = ()  => {
   
  const params  = useParams();
  
  return  params;
};

function mapStateToProps(state, ownProps) {
    
  const params = CollectionPage();
  const productId = params.productId;

  const product =
    productId && state.productsListReducer.length > 0
      ? getProductById(state.productsListReducer, productId)
      : {};
     
  return {
    product,
    products: state.productsListReducer,
    categories: state.categoryListReducer,
  };
}
const mapDispatchToProps = {
  getCategories,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct);
