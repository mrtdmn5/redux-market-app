import * as actionTypes from "../actions/actionTypes";
import initialState from "../reducers/initialState";

export default function productsListReducer(
  state = initialState.products,
  action

) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCES:
      return action.payload;  
    default:
      return state;
  }
}

