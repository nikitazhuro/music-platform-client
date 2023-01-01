import { Box } from "@mui/material";
import { useTypedSelector } from "../../../../hooks/typedHooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";
import PlayerProgress from "../PlayerProgress"

interface ITrackProgressProps {
  audio: any
}

const TrackProgress: React.FC<ITrackProgressProps> = ({
  audio,
}) => {
  const { duration, currentTime } = useTypedSelector(state => state.player)
  const { setCurrentTime } = useActions();

  const onChangeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
    audio.currentTime = Number(e.target.value);
  }

  return (
    <Box display="flex" alignItems="center">
      <Box mr={2}>
        <PlayerProgress width={500} left={currentTime} right={duration} onChange={onChangeCurrentTime} />
      </Box>
      <Box>
        {`${currentTime < 60 ? '00' : `0${Math.floor(currentTime / 60)}`}:${currentTime < 60 ? Math.floor(currentTime) : Math.floor(currentTime) - Math.floor(currentTime / 60) * 60}`}
        {' / '}
        {`0${Math.floor(duration / 60)}:${Math.floor(duration) - Math.floor(duration / 60) * 60}`}
      </Box>
    </Box>
  )
}

export default TrackProgress;