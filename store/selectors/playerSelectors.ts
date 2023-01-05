import { get } from "lodash";
import { RootState } from "../reducers";

// Active track selectors
export const getActiveTrackUUID = (state: RootState) => get(state, ['player', 'activeTrack', 'uuid'], '');

// Player selectors
export const getPlayerPaused = (state: RootState) => get(state, ['player', 'paused'], true);
export const getPlayerVolume = (state: RootState) => get(state, ['player', 'volume'], 10);