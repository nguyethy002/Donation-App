import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DonatedCardProps } from "../components/DonatorCard";
import { placeHolderUsers } from "../data/db";
import type { RootState } from "../redux/store";

// Define the initial state using that type
const initialState: { donationList: DonatedCardProps[] } = {
  donationList: placeHolderUsers,
};

export const donationSlice = createSlice({
  name: "donation",
  initialState,
  reducers: {
    addADonationToDonationList: (
      state,
      action: PayloadAction<DonatedCardProps>
    ) => {
      state.donationList.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addADonationToDonationList } = donationSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.donation.donationList;

export default donationSlice.reducer;
