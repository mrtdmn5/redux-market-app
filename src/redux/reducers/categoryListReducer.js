import * as actionTypes from "../actions/actionTypes";
import initialState from "../reducers/initialState";

export default function changeCategoryReducer(
  state = initialState.categories,
  action

) {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_SUCCES:
      return action.payload;

    
    default:
      return state;
  }
}
