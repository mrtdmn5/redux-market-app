import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListReducer"
import productsListReducer from "./productsListReducer"
import cartSummaryReducer from "./cartSummaryReducer"
import saveProductReducer from "./saveProductreducer"

const rootReducer = combineReducers({ 
    changeCategoryReducer,
    categoryListReducer,
    productsListReducer,
    cartSummaryReducer,
    saveProductReducer
})
export default rootReducer;
