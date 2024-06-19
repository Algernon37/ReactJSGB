import React, { useState } from 'react';
import { TextField, Button, List, ListItem, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './TodoList.module.sass'

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() === '') return;
        setTasks([...tasks, { id: Date.now(), text: newTask }]);
        setNewTask('');
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <Box className={style.control}>
            <Box className={style.controlBox}>
                <TextField
                    label="New Task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    variant="outlined"
                    InputProps={{
                        style: { color: 'white',background: '#3b3b3b' }
                    }}
                />
                <Button variant="contained" color="primary" onClick={handleAddTask}>
                    Add
                </Button>
            </Box>
            <List sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 310 }}>
                {tasks.map(task => (
                    <ListItem
                        key={task.id}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            border: '1px solid #646cff',
                            borderRadius: 2,
                            padding: 1,
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word',
                            whiteSpace: 'normal',
                            maxWidth: '100%',
                        }}
                    >
                        <div className={style.ItemText}>{task.text}</div>
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteTask(task.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List> 
        </Box>
    );
}

export default TodoList;
