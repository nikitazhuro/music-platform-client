import { Box } from "@mui/material";

import TrackProgress from "./TrackProgress"
import TrackDurationProgress from "./TrackDurationProgress";

interface ITrackProgressRootProps {
  audio: any
}

const TrackProgressRoot: React.FC<ITrackProgressRootProps> = ({
  audio,
}) => {
  return (
    <Box display="flex" alignItems="center">
      <Box mr={2}>
        <TrackProgress audio={audio} />
      </Box>
      <TrackDurationProgress />
    </Box>
  )
}

export default TrackProgressRoot;