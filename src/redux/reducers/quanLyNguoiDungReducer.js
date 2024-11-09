import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  fullname: 'Nguyễn Văn A',
  password: '123',
  email: '',
};

const quanLyNguoiDungReducer = createSlice({
  name: 'quanLyNguoiDung', // Tên của slice
  initialState,    // State khởi tạo
  reducers: {      // Khai báo các reducer 
    updateEmailAction: (state, action) => {
      state.email = action.payload;
    },
    dangNhapApiAction: (state, action) => {
      state.email = action.payload.email;
      state.fullname = action.payload.fullname;
      state.password = action.payload.password;
    }
  },
});

export const { dangNhapApiAction, updateEmailAction } = quanLyNguoiDungReducer.actions; // Export actions để sử dụng
export default quanLyNguoiDungReducer.reducer; // Export reducer để add vào store

//------------------ action thunk ------------

export const dangNhapAction = (user, navigate) => {
  return async (dispatch) => {
    try {
      const result = await axios({
        url: 'http://localhost:8080/user/login',
        method: 'POST',
        data: user,
      });

      if (result.status === 201) {
        navigate('/dashboard');
        console.log('result', result.data);
        const action = dangNhapApiAction(result.data);
        dispatch(action);
      }
    } catch (error) {
      console.log('error', error);
    }
  };
};