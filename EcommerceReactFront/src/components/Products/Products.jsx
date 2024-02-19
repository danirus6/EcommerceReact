import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";

const Products = () => {
    const { getProducts, products } = useContext(ProductsContext);
    useEffect(() => {
        getProducts();
    }, []);

const product = products.map((product) => {
    return (
        <div key={product._id}>
        <span>{product.name} </span>
        <span>{product.price.toFixed(2)}€</span>
        </div>
);
});
return <div>{product}</div>;
};

export default Products;