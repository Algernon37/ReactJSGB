import { useDispatch } from "react-redux";
import { removeTask } from '../../reducers/tasksSlice';

const ButtonDeleteComponent = ({ id }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeTask(id));
    };

    return (
        <button onClick={handleDelete}>Delete</button>
    );
};

export default ButtonDeleteComponent;