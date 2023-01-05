import { Box } from '@mui/material';

import { currentTrackTime, transforTrackDuration } from '../../../../../tools/playerTools/index';
import { useTypedSelector } from "../../../../../hooks/typedHooks/useTypedSelector"

interface ITrackDurationProgressProps {
  duration?: number;
}

const TrackDurationProgress: React.FC<ITrackDurationProgressProps> = ({
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

export default TrackDurationProgress;