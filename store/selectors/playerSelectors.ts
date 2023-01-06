import { get } from "lodash";

import { RootState } from "../reducers";

// Active track selectors
export const getActiveTrackUUID = (state: RootState) => get(state, ['player', 'activeTrack', 'uuid'], '');
export const getActiveTrackAudio = (state: RootState) => get(state, ['player', 'activeTrack', 'audio'], '');
export const getActiveTrackDuration = (state: RootState) => get(state, ['player', 'activeTrack', 'duration'], '');
export const getActiveTrackImage = (state: RootState) => get(state, ['player', 'activeTrack', 'image'], '');
export const getActiveTrackName = (state: RootState) => get(state, ['player', 'activeTrack', 'name'], '');
export const getActiveTrackArtist = (state: RootState) => get(state, ['player', 'activeTrack', 'artist'], '');

// Player selectors
export const getPlayerPaused = (state: RootState) => get(state, ['player', 'paused'], true);
export const getPlayerVolume = (state: RootState) => get(state, ['player', 'volume'], 10);
export const getPlayerCurrentTime = (state: RootState) => get(state, ['player', 'currentTime'], 0);
