import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type userType = {
  id: string;
  password: string;
  carts: string[];
};

interface initialStateType {
  signedUsers: userType[];
  loginUser: userType | null;
}

const initialState: initialStateType = {
  signedUsers: [],
  loginUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<userType>) => {
      const { id, password } = action.payload;
      const filteredUserIdx = state.signedUsers.findIndex(
        (u) => u.id == id && u.password == password,
      );
      if (filteredUserIdx < 0) {
        return;
      }
      state.loginUser = { id: id, password: password, carts: [] };
    },
    signup: (state, action: PayloadAction<userType>) => {
      const { id, password } = action.payload;
      const filteredUserIdx = state.signedUsers.findIndex(
        (u) => u.id == id && u.password == password,
      );
      if (filteredUserIdx > 0) {
        return;
      }
      state.signedUsers = [...state.signedUsers, { id, password, carts: [] }];
    },
    addCart: (state, action: PayloadAction<string>) => {
      if (!state.loginUser) return;
      state.loginUser.carts = [...state.loginUser.carts, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, signup, addCart } = userSlice.actions;

export default userSlice.reducer;
