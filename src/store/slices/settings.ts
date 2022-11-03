import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingState {
  downloadPath: string;
  autoPlay: boolean;
  exitDialog: boolean;
}

const initialState: SettingState = {
  downloadPath: '',
  autoPlay: false,
  exitDialog: true
};

const settingSlice = createSlice({
  name: 'setting',
  initialState,
  reducers: {
    loadState(state) {
      const stored = localStorage.getItem('settings');
      if (stored != null) {
        state = JSON.parse(stored);
      }
      state.downloadPath = '';
      state.autoPlay = false;
      state.exitDialog = true;
    },
    setExitDialog(state, action: PayloadAction<boolean>) {
      state.exitDialog = action.payload;
    }
  }
});

export const { actions } = settingSlice;
export default settingSlice.reducer;
