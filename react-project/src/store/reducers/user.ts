import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState, AppThunk } from '../index';

// 引入api方法
import { fetchLogin, fetchUserInfo } from '@/api';

// 可共享的子store可共享数据
const initialState:any = {
  token: '',
  userInfo: {},
  roleInfo: {},
  menuArr: []
}

export const login = createAsyncThunk(
  'user/login',
  async (data:any) => {
    const res:any = await fetchLogin(data);
    return res.token
  }
)

export const getInfo = createAsyncThunk(
  'user/info',
  async () => {
    const res:any = await fetchUserInfo()
    // console.log('用户信息', res)
    return res
  }
)

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token')
      state.token = ''
      state.userInfo = {}
      state.roleInfo = {}
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload
        localStorage.setItem('token', action.payload)
      })
      .addCase(getInfo.fulfilled, (state, action) => {
        const { userInfo, roleInfo, menuArr } = action.payload
        state.userInfo = userInfo
        state.roleInfo = roleInfo
        state.menuArr = menuArr
      })
    }
})

export const { logout } = user.actions;
// 导出子reducer，用于根reducer的合并
export default user.reducer
