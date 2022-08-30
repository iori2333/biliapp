import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingState {
  downloadPath: string;
  autoPlay: boolean;
  font?: string;
}

const initialState: SettingState = {
  downloadPath: '',
  autoPlay: false
};

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    loadState(state) {
      state.downloadPath = '';
      state.autoPlay = false;
    },
    setState(state, action: PayloadAction<SettingState>) {
      state.downloadPath = action.payload.downloadPath;
      state.autoPlay = action.payload.autoPlay;
    }
  }
});

export const { actions } = settingSlice;
export default settingSlice.reducer;
