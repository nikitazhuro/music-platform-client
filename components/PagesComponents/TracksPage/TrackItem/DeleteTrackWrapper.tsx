import { Delete } from "@mui/icons-material"

import CustomIconButton from "../../../UI/IconButton/CustomIconButton"

import { useDeleteTrackMutation } from "../../../../API/tracksAPI"

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

  const removeTrack = async (e: React.MouseEvent) => {
    e.stopPropagation();

    const config = {
      trackUUID,
      image,
      audio,
    }

    await deleteTrackRequest(config);
  }

  return (
    <CustomIconButton onClick={removeTrack} size="medium">
      <Delete />
    </CustomIconButton>
  )
}

export default DeleteTrackWrapper;
