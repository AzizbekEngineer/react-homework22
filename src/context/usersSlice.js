import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: JSON.parse(localStorage.getItem("users")) || [],
  },
  reducers: {
    addTooUsers(state, action) {
      state.value = [...state.value, action.payload];
      localStorage.setItem("users", JSON.stringify(state.value));
    },
    removeFromUsers(state, action) {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
      localStorage.setItem("users", JSON.stringify(state.value));
    },
    editUser: (state, action) => {
      const { id, username, name, profession, age } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.username = username;
        existingUser.name = name;
        existingUser.profession = profession;
        existingUser.age = age;
      }
    },
  },
});

export const { addTooUsers, removeFromUsers, editUser } = usersSlice.actions;
export default usersSlice.reducer;
