import { get } from 'lodash';
import { RootState } from "../reducers";

export const getActiveAlbumTracksUUIDs = (state: RootState) => get(state, ['newAlbumsTracks', 'currentTracksUUIDsList']);
