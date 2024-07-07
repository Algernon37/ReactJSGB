import { useDispatch } from "react-redux";
import { addTask } from '../../reducers/tasksSlice';


const ButtonAddTask = ({
    title,
    setProductName, }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        if (title.trim() !== '') {
            const productData = {
                id: new Date().getTime(),
                title: title,
            };
            dispatch(addTask(productData));
            setProductName('');
        } else {
            alert('Please enter a task title.');
        }

    };

    return (
        <button onClick={handleClick}>Add Product</button>
    );
};



export default ButtonAddTask;