import {configureStore, createSlice} from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
    }
});

export const {increment} = counterSlice.actions;

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    }
});
