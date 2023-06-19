import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    token: '',
    id: '',
    phoneNumber: '',

};

const userSlice = createSlice({
  name: "count",
  initialState,
  reducers: {
    setUserDetails: (state, actions) => {
        return {
          ...state,
          token: actions.payload.token,
          id: actions.payload.id,
          phoneNumber: actions.payload.phoneNumber
        }
    },
    resetUser: (state, actions) => {
      return {...initialState}
  },
  }
});

export const { setUserDetails, resetUser } = userSlice.actions;
export default userSlice.reducer;