import { configureStore } from "@reduxjs/toolkit";
import userRoleSlice from "./slices/userRoleSlice";

const store = configureStore({
  reducer: {
    userRole: userRoleSlice,
  },
});

export default store;
