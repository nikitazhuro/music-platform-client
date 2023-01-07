import { combineReducers, PayloadAction } from "@reduxjs/toolkit";

//API
import { tracksAPI } from './../../API/tracksAPI';
import { albumsAPI } from "../../API/albumsAPI";
import { commentAPI } from "../../API/commentAPI";

//SLICES
import playerSlice from "./slices/playerSlice";

export const reducer = combineReducers({
  player: playerSlice,
  [tracksAPI.reducerPath]: tracksAPI.reducer,
  [commentAPI.reducerPath]: commentAPI.reducer,
  [albumsAPI.reducerPath]: albumsAPI.reducer,
})

export type RootState = ReturnType<typeof reducer>;
