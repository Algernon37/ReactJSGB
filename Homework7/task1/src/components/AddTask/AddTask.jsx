import { useState } from "react";
import style from './style/AddTask.module.sass'
import ButtonAddTask from './ButtonAddTask'

const AddTask = () => {
    const [title, setTaskTitle] = useState('');


    return (
        <div className={style.wrapper}>
            <div className={style.form}>
                <p>title</p>
                <input
                    label="title"
                    type="text"
                    value={title}
                    onChange={(e) => { setTaskTitle(e.target.value) }}
                />
            </div>
            <ButtonAddTask
                title={title}
                setProductName={setTaskTitle}
            />
        </div>
    );
};

export default AddTask;


