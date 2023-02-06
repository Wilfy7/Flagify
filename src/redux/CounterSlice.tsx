import { createSlice } from '@reduxjs/toolkit'



    const initialState = {
        value: 0,
    }

    export const CounterSlice = createSlice({
        name:"favorite",
        initialState,
        reducers:{
            increment: (state) => {
                state.value += 1
            },
        },
    });
  

export const { increment } = CounterSlice.actions
export default CounterSlice.reducer
