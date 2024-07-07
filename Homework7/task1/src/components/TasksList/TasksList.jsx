import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTasks, updateTask } from '../../actions/taskActions';
import ButtonDeleteComponent from './ButtonDeleteProduct'
import style from './style/TaskList.module.sass'

const TasksList = () => {
    const tasks = useSelector((state) => state.tasks.tasks);
    const status = useSelector((state) => state.tasks.status);
    const dispatch = useDispatch();

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchTasks());
        }
    }, [dispatch, status]);

    const handleCheckboxChange = (taskId, completed) => {
        dispatch(updateTask({ id: taskId, completed }));
    };

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error loading tasks.</p>;

    return (
        <div className={style.wrapper}>
            {tasks && tasks.length > 0 && (
                <h2>Task List:</h2>
            )}
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <div className={style.task}>
                            <p className={task.completed ? style.completed : ''}>{task.title}</p>
                            <input
                                type="checkbox"
                                checked={task.completed}
                                onChange={(e) => handleCheckboxChange(task.id, e.target.checked)}
                            />
                            <ButtonDeleteComponent id={task.id} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TasksList;

