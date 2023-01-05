import { VolumeDown } from "@mui/icons-material";
import { IconButton, Box } from "@mui/material";

import Progress from "../../../UI/Progress";

import { useTypedSelector } from "../../../../hooks/typedHooks/useTypedSelector";
import { useActions } from "../../../../hooks/useActions";
import { getPlayerVolume } from "../../../../store/selectors/playerSelectors";

interface IPlayerVolumeProps {
  audio: any;
}

const PlayerVolume: React.FC<IPlayerVolumeProps> = ({
  audio,
}) => {
  const volume = useTypedSelector(getPlayerVolume)
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
      <Progress left={volume} right={100} onChange={onChangeVolume} />
    </Box>
  )
}

export default PlayerVolume;