import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTasksSuccess, fetchTasksFailure, setStatus } from '../reducers/tasksSlice';

const fetchTasksFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('tasks');
        if (serializedState === null) {
            return [];
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.error('Error fetching tasks from localStorage:', error);
        return [];
    }
};

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async (_, { dispatch }) => {
        dispatch(setStatus('loading'));
        try {
            const tasks = fetchTasksFromLocalStorage();
            dispatch(fetchTasksSuccess(tasks));
        } catch (error) {
            dispatch(fetchTasksFailure(error.message));
        }
    }
);

export const updateTask = createAsyncThunk(
    'tasks/updateTask',
    async ({ id, completed }, { dispatch, getState }) => {
        try {
            const { tasks } = getState().tasks; 
            const updatedTasks = tasks.map((task) =>
                task.id === id ? { ...task, completed } : task
            );
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            dispatch(fetchTasksSuccess(updatedTasks));
        } catch (error) {
            console.error('Error updating task:', error);
        }
    }
);