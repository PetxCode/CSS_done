import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};

const redux = createSlice({
  name: "CSS",
  initialState,
  reducers: {
    createUserName: (state: { userName: string }, { payload }) => {
      state.userName = payload;
    },
  },
});

export const { createUserName } = redux.actions;

export default redux.reducer;
