import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState, AppThunk } from '../index';

// 引入api方法
import { fetchLogin } from '@/api';

// 可共享的子store可共享数据
const initialState:any = {
  token: '',
  userInfo: {}
}

export const login = createAsyncThunk(
  'user/login',
  async (data:any) => {
    const res:any = await fetchLogin(data);
    return res.token
  }
)

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload
      })
    }
})

// export const { } = user.actions;
// 导出子reducer，用于根reducer的合并
export default user.reducer
