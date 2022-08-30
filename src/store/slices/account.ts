import { createSlice } from '@reduxjs/toolkit';

interface AccountState {
  hasLoggedIn: boolean;
  userName?: string;
}

const initialState: AccountState = {
  hasLoggedIn: false
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {}
});

export const { actions } = accountSlice;
export default accountSlice.reducer;
