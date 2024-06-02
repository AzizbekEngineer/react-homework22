import { createSlice } from "@reduxjs/toolkit";

export const FollowSlice = createSlice({
  name: "followers",
  initialState: {
    value: JSON.parse(localStorage.getItem("followers")) || [],
  },
  reducers: {
    followBtn: (state, action) => {
      let index = state.value.findIndex((el) => el.id === action.payload.id);
      if (index < 0) {
        state.value = [...state.value, action.payload];
      } else {
        state.value = state.value.filter((el) => el.id !== action.payload.id);
      }
      localStorage.setItem("followers", JSON.stringify(state.value));
    },
  },
});
export const { followBtn } = FollowSlice.actions;
export default FollowSlice.reducer;
