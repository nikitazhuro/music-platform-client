import { Box } from '@mui/material';

import TrackCurrentTime from './TrackCurrentTime';
import TrackDuration from './TrackDuration';

interface ITrackDurationProgressProps {
  duration?: number;
}

const TrackDurationProgress: React.FC<ITrackDurationProgressProps> = ({
  duration,
}) => {
  return (
    <Box display="flex">
      <TrackCurrentTime />
      <Box mx={0.5}>
        /
      </Box>
      <TrackDuration duration={duration} />
    </Box>
  )
}

export default TrackDurationProgress;