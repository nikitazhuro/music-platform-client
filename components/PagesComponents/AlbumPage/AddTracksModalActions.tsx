import { Button } from "@mui/material";
import { useRouter } from "next/router";

import { useUpdateAlbumTracksMutation } from "../../../API/albumsAPI";
import { useTypedSelector } from "../../../hooks/typedHooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { getActiveAlbumTracksUUIDs } from "../../../store/selectors/newAlbumTracksSelectors";

interface IAddTracksModalActionsProps {
  handleClose: Function
}

const AddTracksModalActions: React.FC<IAddTracksModalActionsProps> = ({
  handleClose,
}) => {
  const router = useRouter();

  const [updateAlbumTracks] = useUpdateAlbumTracksMutation();

  const activeAlbumTracksUUIDs = useTypedSelector(getActiveAlbumTracksUUIDs);

  const { clearTracksUUIDsList } = useActions();

  const addTracks = () => {
    const config = {
      trackList: activeAlbumTracksUUIDs,
      albumUUID: router.query.uuid as string || '',
    }

    updateAlbumTracks(config)
    handleClose();
    clearTracksUUIDsList();
  };

  return (
    <Button onClick={addTracks} autoFocus>
      Add tracks
    </Button>
  )
}

export default AddTracksModalActions;
