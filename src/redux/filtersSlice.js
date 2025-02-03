import { createSlice } from '@reduxjs/toolkit';

export const filterInitialState = null;
// export const filterInitialState = [];
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setQueryFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { setQueryFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
