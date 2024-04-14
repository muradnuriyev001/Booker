import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  title: string;
  price: number;
}

const initialState: FilterState = {
  title: "",
  price: 200,
};

const bookFilterSlice = createSlice({
  name: "bookFilter",
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { setTitleFilter, setPriceFilter } = bookFilterSlice.actions;
export const selectTitleFilter = (state: { bookFilter: FilterState }) =>
  state.bookFilter;

export const selectPriceFilter = (state: { bookFilter: FilterState }) =>
  state.bookFilter;
export default bookFilterSlice.reducer;
