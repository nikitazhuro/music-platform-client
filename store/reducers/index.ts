import { combineReducers, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import playerSlice from "./slices/playerSlice";

export const reducer = combineReducers({
  player: playerSlice,
})

export const rootReducer = (state: any, action: PayloadAction<object, string>) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return reducer(state, action);
  }
};