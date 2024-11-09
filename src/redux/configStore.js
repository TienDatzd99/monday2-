import { configureStore } from '@reduxjs/toolkit';
import quanLyNguoiDungReducer from './reducers/quanLyNguoiDungReducer';

const store = configureStore({
  reducer: {
    quanLyNguoiDung: quanLyNguoiDungReducer,
  },
});

export default store;