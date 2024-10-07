import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  goal: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setGoal: (state, action) => {
      state.goal = action.payload;
    },
  },
});

export const { setGoal } = chatSlice.actions;

export default chatSlice.reducer;
