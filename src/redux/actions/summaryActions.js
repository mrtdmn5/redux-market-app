import * as actionTypes from "./actionTypes";
import * as alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';

export function getProductToSummary(product) {

  return { 
    type: actionTypes.ADD_PRODUCTS_TO_SUMMARY, 
    payload: product
  };
}




export function removeProductFromSummary(product) {
  
    alertify.warning(product.product.productName + " Removed.");
  return { 
    type: actionTypes.REMOVE_PRODUCT_FROM_SUMMARY, 
    payload: product
  };
}

export function removeAllProductFromSummary() {

return { 
  type: actionTypes.REMOVE_CART_SUMMARY, 
  payload: []
};
}

