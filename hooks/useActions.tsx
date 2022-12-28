import { bindActionCreators } from "@reduxjs/toolkit";

import ActionCreators from '../store/actions-creators/index';

import { useTypedDispatch } from "./typedHooks/useTypedDispatch"

export const useActions = () => {
  const dispatch = useTypedDispatch();

  return bindActionCreators(ActionCreators, dispatch);
}