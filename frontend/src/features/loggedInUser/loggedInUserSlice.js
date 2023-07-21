import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: null,
  lastName: null,
  username: null,
  profile: {
    bio: null,
    img: null,
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.firstName = action.payload.first_name;
      state.lastName = action.payload.last_name;
      state.username = action.payload.username;
      state.profile.bio = action.payload.bio;
      state.profile.img = action.payload.profile_img;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setProfile: (state, action) => {
      state.profile.bio = action.payload.bio;
      state.profile.img = action.payload.img;
    },
  }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;