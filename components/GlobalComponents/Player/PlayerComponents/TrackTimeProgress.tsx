import { Box } from '@mui/material';

import { currentTrackTime, transforTrackDuration } from './../../../../tools/playerTools/index';
import { useTypedSelector } from "../../../../hooks/typedHooks/useTypedSelector"

interface ITrackTimeProgressProps {
  duration?: number;
}

const TrackTimeProgress: React.FC<ITrackTimeProgressProps> = ({
  duration,
}) => {
  const { duration: storeDuration, currentTime: time } = useTypedSelector(state => state.player)

  return (
    <Box>
      {currentTrackTime(time)}
      {' / '}
      {transforTrackDuration(duration || storeDuration)}
    </Box>
  )
}

export default TrackTimeProgress;