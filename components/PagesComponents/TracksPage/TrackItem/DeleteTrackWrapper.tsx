import { Delete } from "@mui/icons-material"

import CustomIconButton from "../../../UI/IconButton/CustomIconButton"

import { useDeleteTrackMutation } from "../../../../API/tracksAPI"
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/typedHooks/useTypedSelector";
import { getActiveTrackUUID } from "../../../../store/selectors/playerSelectors";

interface IDeleteTrackWrapperProps {
  trackUUID: string;
  image: string;
  audio: string;
}

const DeleteTrackWrapper: React.FC<IDeleteTrackWrapperProps> = ({
  trackUUID,
  image,
  audio,
}) => {
  const [deleteTrackRequest] = useDeleteTrackMutation();
  const activeTrackUUID = useTypedSelector(getActiveTrackUUID);
  const { setActiveTrack } = useActions();

  const removeTrack = async (e: React.MouseEvent) => {
    e.stopPropagation();

    const config = {
      trackUUID,
      image,
      audio,
    }

    await deleteTrackRequest(config);

    if (activeTrackUUID === trackUUID) {
      setActiveTrack(null)
    }
  }

  return (
    <CustomIconButton onClick={removeTrack} size="medium">
      <Delete />
    </CustomIconButton>
  )
}

export default DeleteTrackWrapper;
