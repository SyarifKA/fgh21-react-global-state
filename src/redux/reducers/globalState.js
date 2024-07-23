import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataList: [],
  };

  const dataUser = createSlice({
    name: 'user',
    initialState,
    reducers: {
      listData: (state, action) => {
        state.dataList = [...state.dataList, ...action.payload]
      },
    },
  });

  export const { listData } = dataUser.actions;
  export default dataUser.reducer;  