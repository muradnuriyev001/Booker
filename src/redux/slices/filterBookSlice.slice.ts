import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  title: string;
}

const initialState: FilterState = {
  title: "",
};

const bookFilterSlice = createSlice({
  name: "bookFilter",
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
  },
});

export const { setTitleFilter } = bookFilterSlice.actions;
export const selectTitleFilter = (state: { bookFilter: FilterState }) =>
  state.bookFilter;
export default bookFilterSlice.reducer;
