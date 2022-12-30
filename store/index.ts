import { ThunkAction } from '@reduxjs/toolkit';
import { AnyAction } from '@reduxjs/toolkit';
import { Action, Store } from 'redux'
import { Context, createWrapper } from "next-redux-wrapper";
import { configureStore } from '@reduxjs/toolkit';

import { reducer, RootState } from './reducers/index';

//API
import { tracksAPI } from '../API/tracksAPI';

const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(tracksAPI.middleware),
});

const makeStore = (context: Context) => store

export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
