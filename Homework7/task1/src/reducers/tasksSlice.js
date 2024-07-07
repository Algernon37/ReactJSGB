import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            );
        },
        fetchTasksSuccess: (state, action) => {
            state.tasks = action.payload;
            state.status = 'succeeded';
        },
        fetchTasksFailure: (state, action) => {
            state.tasks = action.payload;
            state.status = 'failed';
        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
        updateTask: (state, action) => {
            const { id, completed } = action.payload;
            const existingTask = state.tasks.find((task) => task.id === id);
            if (existingTask) {
                existingTask.completed = completed;
            }
        }
    }
})


export const { addTask, removeTask, fetchTasksSuccess, fetchTasksFailure, setStatus, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;