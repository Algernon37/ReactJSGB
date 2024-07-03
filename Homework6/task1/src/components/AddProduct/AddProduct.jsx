import { useState } from "react";
import ButtonAddProduct from "./ButtonAddProduct";
import style from './AddProduct.module.sass'

const AddProduct = () => {
    const [name, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [availability, setAvailability] = useState('');

    return (
        <div className={style.wrapper}>
            <div className={style.form}>
                <p>name</p>
                <input
                    label="name"
                    type="text"
                    value={name}
                    onChange={(e) => { setProductName(e.target.value) }}
                />
                <p>description</p>
                <textarea
                    label="description"
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                />
                <p>price</p>
                <input
                    label="price"
                    type="number"
                    value={price}
                    onChange={(e) => { setPrice(e.target.value) }}
                />
                <p>availability</p>
                <input
                    type="checkbox"
                    label="Yes"
                    checked={availability}
                    onChange={(e) => { setAvailability(e.target.checked) }}
                />
            </div>
            <ButtonAddProduct
                name={name}
                description={description}
                price={price}
                availability={availability}
                setProductName={setProductName}
                setDescription={setDescription}
                setPrice={setPrice}
                setAvailability={setAvailability}
            />
        </div>
    );
};

export default AddProduct;