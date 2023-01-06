import { Box } from "@mui/material"

import { useTypedSelector } from "../../../../../hooks/typedHooks/useTypedSelector"
import { getPlayerCurrentTime } from "../../../../../store/selectors/playerSelectors"
import { currentTrackTime } from "../../../../../tools/playerTools"

const TrackCurrentTime: React.FC = () => {
  const currentTime = useTypedSelector(getPlayerCurrentTime)

  return (
    <Box>
      {currentTrackTime(currentTime)}
    </Box>
  )
}

export default TrackCurrentTime;
