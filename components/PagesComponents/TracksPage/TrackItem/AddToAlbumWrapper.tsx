import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useActions } from "../../../../hooks/useActions";
import { getActiveAlbumTracksUUIDs } from "../../../../store/selectors/newAlbumTracksSelectors";
import CustomIconButton from "../../../UI/IconButton/CustomIconButton";

interface IAddToAlbumWrapperProps {
  trackUUID: string;
}

const AddToAlbumWrapper: React.FC<IAddToAlbumWrapperProps> = ({
  trackUUID,
}) => {
  const activeAlbumTracksUUIDs = useSelector(getActiveAlbumTracksUUIDs);
  const {
    addTrack,
    removeTrack,
  } = useActions();

  const isTrackIncludes = activeAlbumTracksUUIDs.includes(trackUUID);

  const clickHandler = () => {
    if (isTrackIncludes) {
      removeTrack(trackUUID);
    } else {
      addTrack(trackUUID);
    }
  }
  return (
    <CustomIconButton onClick={clickHandler} size="small">
      {isTrackIncludes
        ? <Remove />
        : <Add />}
    </CustomIconButton>
  )
}

export default AddToAlbumWrapper;
