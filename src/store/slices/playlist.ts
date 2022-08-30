import { VideoInfo } from '@/api/models/video';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PlaylistState {
  videos: VideoInfo[];
  current: number;
  paused: boolean;
}

const initialState: PlaylistState = {
  videos: [],
  current: -1,
  paused: true
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    addVideo(state, action: PayloadAction<VideoInfo>) {
      const length = state.videos.push(action.payload);
      state.current = length - 1;
    },
    removeVideo(state, action: PayloadAction<string>) {
      const index = state.videos.findIndex(
        video => video.bvid == action.payload
      );
      state.videos = state.videos.filter(video => video.bvid != action.payload);
      if (state.current == index) {
        state.current = state.videos.length - 1;
      } else if (state.current > index) {
        state.current--;
      }
    },
    clearVideo(state) {
      state.videos = [];
      state.current = -1;
      state.paused = true;
    },
    setCurrent(state, action: PayloadAction<string>) {
      state.current = state.videos.findIndex(
        video => video.bvid == action.payload
      );
      state.paused = false;
    },
    nextVideo(state) {
      if (state.current == state.videos.length - 1) {
        state.paused = true;
      } else {
        state.current = (state.current + 1) % state.videos.length;
        state.paused = false;
      }
    }
  }
});

export const { actions } = playlistSlice;
export default playlistSlice.reducer;
