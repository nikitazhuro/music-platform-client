import { combineReducers } from "@reduxjs/toolkit";
import playerSlice from "./slices/playerSlice";

export const rootReducer = combineReducers({
  player: playerSlice,
})