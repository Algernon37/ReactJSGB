import { useDispatch } from "react-redux";
import { deleteProduct } from '../../reducers/ProductsSlice';

const ButtonDeleteComponent = ({index}) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteProduct(index));
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
};



export default ButtonDeleteComponent;

