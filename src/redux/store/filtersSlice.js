import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: {
    city: [],
    pet: [],
    gender: "",
    age: [],
    sterilization: "",
  },
  filteredPets: [],
  visibleCount: 12,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.values = action.payload;
      state.visibleCount = 12;
    },
    setFilteredPets: (state, action) => {
      state.filteredPets = action.payload;
    },
    resetFilters: (state) => {
      state.values = initialState.values;
      state.filteredPets = [];
      state.visibleCount = 12;
    },
    showMore: (state) => {
      state.visibleCount += 12;
    },
  },
});

export const { setFilters, setFilteredPets, resetFilters, showMore } =
  filtersSlice.actions;
export default filtersSlice.reducer;
