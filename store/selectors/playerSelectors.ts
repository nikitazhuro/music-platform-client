import { get } from "lodash";
import { RootState } from "../reducers";

export const getActiveTrackUUID = (state: RootState) => get(state, ['player', 'activeTrack', 'uuid'], '');