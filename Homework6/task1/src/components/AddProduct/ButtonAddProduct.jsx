import { useDispatch } from "react-redux";
import { addProduct } from '../../reducers/ProductsSlice';


const ButtonAddProduct = ({
    name,
    description,
    price,
    availability,
    setProductName,
    setDescription,
    setPrice,
    setAvailability }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        const productData = {
            name: name,
            description: description,
            price: price,
            availability: availability
        };

        dispatch(addProduct(productData));

        setProductName('');
        setDescription('');
        setPrice('');
        setAvailability(false);
    };

    return (
        <button onClick={handleClick}>Add Product</button>
    );
};



export default ButtonAddProduct;