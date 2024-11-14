import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TUser{
  isActive?: boolean;
  isVerified?: boolean;
  _id?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  casino?: string | null;
}

type TAuthState = {
  user: TUser | null;
  // user: any | null;
  isLoading: boolean;
  token: string | null;
};
const initialState: TAuthState = {
  user: null,
  isLoading: true,
  token: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<TUser | null>) {
      // console.log("pppp", action.payload);
      
      state.user = action.payload;
      state.isLoading = false;
    },
    logout(state) {
      state.user = null;
      state.isLoading = false
      state.token = null
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action?.payload || false;
    },
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
    setState(_, action: PayloadAction<TAuthState>) {
      return action.payload;
    },
  },
});

export const { setUser, logout, setLoading, setToken, setState } =
  userSlice.actions;
export default userSlice.reducer;
