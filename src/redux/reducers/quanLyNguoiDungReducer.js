import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const quanLyNguoiDungReducer = createSlice({
  name: 'counter', // Tên của slice
  initialState,    // State khởi tạo
  reducers: {      // Khai báo các reducer 
   
  },
});

export const { increment, decrement, incrementByAmount } = quanLyNguoiDungReducer.actions; // Export actions để sử dụng
export default quanLyNguoiDungReducer.reducer; // Export reducer để add vào store


