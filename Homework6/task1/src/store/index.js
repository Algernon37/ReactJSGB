import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem('reduxState', JSON.stringify(state));
    } catch (e) {
        console.warn("Could not save state", e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn("Could not load state", e);
        return undefined;
    }
};

const preloadedState = loadFromLocalStorage();

const store = configureStore({
    reducer: rootReducer,
    preloadedState
});

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;