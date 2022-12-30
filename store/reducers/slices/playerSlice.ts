import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITrack } from '../../../types/track'

export interface IPlayerState {
  activeTrack: null | ITrack;
  paused: boolean;
  volume: number;
  duration: number;
  currentTime: number;
}

const initialState: IPlayerState = {
  activeTrack: null,
  paused: true,
  volume: 50,
  duration: 0,
  currentTime: 0,
}

const playerSlice = createSlice({
  name: 'playerSlice',
  initialState,
  reducers: {
    setActiveTrack: (state: IPlayerState, action: PayloadAction<ITrack, string>) => {
      state.activeTrack = action.payload
    },
    setPaused: (state: IPlayerState, action: PayloadAction<boolean, string>) => {
      state.paused = action.payload
    },
    setVolume: (state: IPlayerState, action: PayloadAction<number, string>) => {
      state.volume = action.payload
    },
    setDuration: (state: IPlayerState, action: PayloadAction<number, string>) => {
      state.duration = action.payload
    },
    setCurrentTime: (state: IPlayerState, action: PayloadAction<number, string>) => {
      state.currentTime = action.payload
    }
  }
})

export const playerSliceActions = playerSlice.actions;



export default playerSlice.reducer;
