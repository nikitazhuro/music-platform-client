import { rootReducer, RootState } from './reducers/index';
import { Store } from 'redux'
import { Context, createWrapper } from "next-redux-wrapper";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
});

const makeStore = (context: Context) => store

export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});