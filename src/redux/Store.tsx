import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './CounterSlice'
import changeColorReducer from './colorSlice'
import itemColorReducer from './colorSlice'


//Creating a store
export const Store = configureStore({
    reducer: {
    // counter: counterSlice.reducer
    favorite: CounterReducer,
    backgroundColor: changeColorReducer,
    itemColor: itemColorReducer

}
})