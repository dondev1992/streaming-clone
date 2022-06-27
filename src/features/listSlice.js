import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    list: [],
  },
  reducers: {
    getList: (state) => {
      return { ...state, list: [...state.list] };
    },
    addToList: (state, action) => {
      const item = action.payload;
      return { ...state, list: [...state.list, item] };
    },

    deleteItemFromList: (state, action) => {
      const list = state.list.filter((i) => i.name !== action.payload.name);
      return { ...state, list: [...list] };
    },
  },
});

export const { getList, addToList, deleteItemFromList } = listSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.user.value)`
export const selectList = (state) => state.list;

export default listSlice.reducer;
