import { IFrontView } from "@/types/frontview";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: IFrontView = {
  background: {
    type: "image",
    image: "",
  },
  logo: "",
  primaryBannerImg: [],
  secondaryBannerImg: [],
  topButton: {
    text: "",
    link: "",
    color: "",
  },
  whatsappStatus: false,
};
const frontViewSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFrontViewValue(state, action: PayloadAction<Partial<IFrontView>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFrontViewValue } = frontViewSlice.actions;
export default frontViewSlice.reducer;
