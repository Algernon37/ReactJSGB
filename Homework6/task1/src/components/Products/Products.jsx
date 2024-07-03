import { useSelector } from "react-redux";
import { useState } from "react";
import ButtonDeleteComponent from "./ButtonDeleteProduct";
import EditProductForm from "../EditForm/EditProductForm";
import style from './Products.module.sass'

const Products = () => {
    const products = useSelector((state) => state.product.products);
    const [editingIndex, setEditingIndex] = useState(null);

    return (
        <div className={style.wrapper}>
            <h2>Product List</h2>
            <ul>
                {products && products.map((product, index) => (
                    product ? (
                        <li key={index}>
                            <div className={style.product}>
                                <div className={style.productBox}>
                                    <strong>Name:</strong> {product.name}<br />
                                    <strong>Description:</strong> {product.description}<br />
                                    <strong>Price:</strong> ${product.price}<br />
                                    <strong>Availability:</strong> {product.availability ? "Available" : "Not Available"}<br />
                                </div>
                                <ButtonDeleteComponent index={index} />
                                {editingIndex === index ? (
                                    <EditProductForm
                                        index={index}
                                        product={product}
                                        onSave={() => setEditingIndex(null)}
                                        onCancel={() => setEditingIndex(null)}
                                    />
                                ) : (
                                    <button onClick={() => setEditingIndex(index)}>Edit</button>
                                )}
                            </div>
                        </li>
                    ) : null
                ))}
            </ul>
        </div>
    );
};

export default Products;