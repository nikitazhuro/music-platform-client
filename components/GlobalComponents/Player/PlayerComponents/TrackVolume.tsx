import { VolumeDown } from "@mui/icons-material";
import { IconButton, Box } from "@mui/material";

import PlayerProgress from "../PlayerProgress";

import { useTypedSelector } from "../../../../hooks/typedHooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";

interface ITrackVolumeProps {
  audio: any;
}

const TrackVolume: React.FC<ITrackVolumeProps> = ({
  audio,
}) => {
  const { volume } = useTypedSelector(state => state.player)
  const { setVolume } = useActions();

  const onChangeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
    audio.volume = Number(e.target.value) / 100;
  }

  return (
    <Box display="flex" alignItems="center" mr={2}>
      <IconButton color="inherit">
        <VolumeDown />
      </IconButton>
      <PlayerProgress left={volume} right={100} onChange={onChangeVolume} />
    </Box>
  )
}

export default TrackVolume;