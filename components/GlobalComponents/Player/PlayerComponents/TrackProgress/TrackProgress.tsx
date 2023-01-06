import { Box } from "@mui/material";

import Progress from "../../../../UI/Progress";

import { useTypedSelector } from "../../../../../hooks/typedHooks/useTypedSelector";
import { useActions } from "../../../../../hooks/useActions";
import { getActiveTrackDuration, getPlayerCurrentTime } from "../../../../../store/selectors/playerSelectors";


interface ITrackProgressProps {
  audio: any;
}

const TrackProgress: React.FC<ITrackProgressProps> = ({
  audio,
}) => {
  const currentTime = useTypedSelector(getPlayerCurrentTime)
  const duration = useTypedSelector(getActiveTrackDuration);

  const { setCurrentTime } = useActions();

  const onChangeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
    audio.currentTime = Number(e.target.value);
  }
  return (
    <Box>
      <Progress width={500} left={currentTime} right={duration} onChange={onChangeCurrentTime} />
    </Box>
  )
}

export default TrackProgress;
