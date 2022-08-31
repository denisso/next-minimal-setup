import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

const slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

export default slice.reducer;
export const selectCount = (state) => state.counter.value;
export const { increment, decrement } = slice.actions;
