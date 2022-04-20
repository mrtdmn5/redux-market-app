import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartSummaryReducer(
    state = initialState.cartSummary,
    action
  
  ) 
  
 
  {
    switch (action.type) {
      case actionTypes.ADD_PRODUCTS_TO_SUMMARY:{
   
     
      
       var addItem= state.find((item)=>(item.product.id===action.payload.product.id));
       if(addItem){
   
        var addQuantity=state.map(cartItem=>{
                if(cartItem.product.id===action.payload.product.id){
                    cartItem.quantity+=1;
                }
                return cartItem;
        });
        return addQuantity;
    }    

             else 
              return [...state,{...action.payload}];  
             
      
      }
       
      case actionTypes.REMOVE_PRODUCT_FROM_SUMMARY:{


    let filteredArray = [];

    filteredArray = state.filter((item) => item.product !== action.payload.product);
        
            return filteredArray;
      }

      case actionTypes.REMOVE_CART_SUMMARY:{
      
        return [];

      }


      default:
        return state;
    }
  }
  

  