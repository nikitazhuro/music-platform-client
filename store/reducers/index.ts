import { combineReducers, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import commentAPI from "../../API/commentAPI";

//API
import { tracksAPI } from './../../API/tracksAPI';

//SLICES
import playerSlice from "./slices/playerSlice";

export const reducer = combineReducers({
  player: playerSlice,
  [tracksAPI.reducerPath]: tracksAPI.reducer,
  [commentAPI.reducerPath]: commentAPI.reducer,
})

export type RootState = ReturnType<typeof reducer>;
