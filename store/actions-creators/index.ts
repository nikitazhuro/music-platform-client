import { albumNewTrackListSliceActions } from '../reducers/slices/albumNewTrackListSlice';
import { playerSliceActions } from './../reducers/slices/playerSlice';

export default {
  ...playerSliceActions,
  ...albumNewTrackListSliceActions,
}