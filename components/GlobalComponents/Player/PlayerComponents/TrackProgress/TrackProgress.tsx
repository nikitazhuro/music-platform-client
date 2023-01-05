import { Box } from "@mui/material";
import { useTypedSelector } from "../../../../../hooks/typedHooks/useTypedSelector";
import { useActions } from "../../../../../hooks/useActions";
import Progress from "../../../../UI/Progress";

interface ITrackProgressProps {
  audio: any;
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
    <Box>
      <Progress width={500} left={time} right={duration} onChange={onChangeCurrentTime} />
    </Box>
  )
}

export default TrackProgress;
