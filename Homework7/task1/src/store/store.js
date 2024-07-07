import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../reducers/tasksSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage, 
};

const persistedReducer = persistReducer(persistConfig, tasksReducer);

const store = configureStore({
    reducer: {
        tasks: persistedReducer
    },
});

export const persistor = persistStore(store);
export default store;