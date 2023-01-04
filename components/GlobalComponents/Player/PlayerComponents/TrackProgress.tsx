import { Box } from "@mui/material";

import PlayerProgress from "../PlayerProgress"

import { useTypedSelector } from "../../../../hooks/typedHooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";
import { currentTrackTime, transforTrackDuration } from "../../../../tools/playerTools";
import TrackTimeProgress from "./TrackTimeProgress";

interface ITrackProgressProps {
  audio: any
}

const TrackProgress: React.FC<ITrackProgressProps> = ({
  audio,
}) => {
  const { duration, currentTime: time } = useTypedSelector(state => state.player)
  const { setCurrentTime } = useActions();

  const onChangeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
    audio.currentTime = Number(e.target.value);
  }

  return (
    <Box display="flex" alignItems="center">
      <Box mr={2}>
        <PlayerProgress width={500} left={time} right={duration} onChange={onChangeCurrentTime} />
      </Box>
      <TrackTimeProgress />
    </Box>
  )
}

export default TrackProgress;