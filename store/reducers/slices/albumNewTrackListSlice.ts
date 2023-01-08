import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
  currentTracksUUIDsList: Array<string | void>
}

const initialState: IInitialState = {
  currentTracksUUIDsList: [],
}

const albumNewTrackListSlice = createSlice({
  name: 'albumNewTrackListSlice',
  initialState,
  reducers: {
    addTrack: (state, action: PayloadAction<string, string>) => {
      state.currentTracksUUIDsList = [...state.currentTracksUUIDsList, action.payload]
    },
    removeTrack: (state, action: PayloadAction<string, string>) => {
      state.currentTracksUUIDsList = [...state.currentTracksUUIDsList.filter((el) => el !== action.payload)]
    },
    clearTracksUUIDsList: (state) => {
      state.currentTracksUUIDsList = [];
    }
  }

})

export const albumNewTrackListSliceActions = albumNewTrackListSlice.actions;

export default albumNewTrackListSlice.reducer;
