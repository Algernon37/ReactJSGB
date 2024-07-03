import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editProduct } from "../../reducers/ProductsSlice"


const EditProductForm = ({ index, product, onSave, onCancel }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [availability, setAvailability] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (product) {
            setName(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setAvailability(product.availability);
        }
    }, [product]);

    const handleSave = () => {
        const updatedProduct = { name, description, price, availability };
        dispatch(editProduct({ index, updatedProduct }));
        onSave();
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="checkbox"
                checked={availability}
                onChange={(e) => setAvailability(e.target.checked)}
            />
            <div>
                <button onClick={handleSave}>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
};

export default EditProductForm;
