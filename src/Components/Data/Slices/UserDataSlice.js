import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
  name: "userData",
  initialState: {
    user: "",
    setAlert: {
      show: false,
      message: "",
      variant: "",
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAlert: (state, action) => {
      state.setAlert = action.payload;
    },
  },
});

export const userDataActions = userDataSlice.actions;
export default userDataSlice;
