import React, { createContext, useReducer } from "react";
import axios from "axios";
import ProductsReducer from "./ProductsReducer";
export const ProductsProvider = ({ children }) => {

const [state, dispatch] = useReducer(ProductsReducer, initialState);
const getProducts = async () => {
const res = await axios.get(API_URL + "/products/getAll");

dispatch({
    type: "GET_PRODUCTS",
    payload: res.data,
});
return (

    <ProductsContext.Provider
        value={{
    
            products: state.products,
            getProducts
        }}
    
    >{children}
    </ProductsContext.Provider>  
    );
    };
};