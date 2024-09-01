import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "../Slices/UserDataSlice";

const reduxStore = configureStore({
  reducer: {
    userData: userDataSlice.reducer,
  },
});

export default reduxStore;