import { combineReducers } from "redux";
import productReducer from "./ProductsSlice";

const rootReducer = combineReducers({
    product: productReducer
});

export default rootReducer;