import { createSlice } from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: {
    name: "",
    friends: [],
  },
  reducers: {
    addUser: (state, payload) => {
      state.name = payload.payload;
    },
    addFriends : (state, payload)=>{
      state.friends = payload.payload
    }
  },
});

export const { addUser, addFriends } = currentUserSlice.actions;

export default currentUserSlice.reducer;
