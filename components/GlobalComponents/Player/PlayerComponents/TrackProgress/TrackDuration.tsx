import { Box } from "@mui/material";

import { useTypedSelector } from "../../../../../hooks/typedHooks/useTypedSelector";
import { getActiveTrackDuration } from "../../../../../store/selectors/playerSelectors";
import { transforTrackDuration } from "../../../../../tools/playerTools"

interface ITrackDurationProps {
  duration?: number;
}

const TrackDuration: React.FC<ITrackDurationProps> = ({
  duration,
}) => {
  const activeTrackDuration = useTypedSelector(getActiveTrackDuration)

  return (
    <Box>
      {transforTrackDuration(duration || activeTrackDuration)}
    </Box>
  )
}

export default TrackDuration;
