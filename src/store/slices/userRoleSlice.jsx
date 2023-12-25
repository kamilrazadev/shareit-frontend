import { createSlice } from "@reduxjs/toolkit";

const userRoleSlice = createSlice({
  name: "userRole",
  initialState: "",
  reducers: {
    updateUserRole(state, action) {
      return action.payload || "guest";
    },
  },
});

export default userRoleSlice.reducer;

export const { updateUserRole } = userRoleSlice.actions;
