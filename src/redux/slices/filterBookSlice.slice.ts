import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  title: string;
  price: number;
  author: string[];
}

const initialState: FilterState = {
  title: "",
  price: 200,
  author: [],
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
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
  },
});

export const { setTitleFilter, setPriceFilter, setAuthorFilter } =
  bookFilterSlice.actions;
export const selectTitleFilter = (state: { bookFilter: FilterState }) =>
  state.bookFilter;

export const selectPriceFilter = (state: { bookFilter: FilterState }) =>
  state.bookFilter;

export const selectAuthorFilter = (state: { bookFilter: FilterState }) =>
  state.bookFilter;
export default bookFilterSlice.reducer;
