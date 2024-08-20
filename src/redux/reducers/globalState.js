import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dataList: [],
  };

  const dataUser = createSlice({
    name: 'user',
    initialState,
    reducers: {
      listData: (state, action) => {
            // state.dataList = [...state.dataList, ...action.payload]
            state.dataList = state.dataList.length > 0? state.dataList:[...state.dataList, ...action.payload]
        },
        // deleteData: (state, action) => {
        //     const result = state.filter((dataList)=>dataList.id !== action.payload)
        // state.dataList = result
        // }
    },
  });

  export const { listData } = dataUser.actions;
  export default dataUser.reducer;  