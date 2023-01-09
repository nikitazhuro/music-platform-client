import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

import TracksList from "../TracksPage/TracksCard/TracksList";
import AddTracksModalActions from "./AddTracksModalActions";

interface IAddTracksModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const hiddenElements = ['deleteTrackBtn'];
const disabledEvents = ['goToTrackPage'];

const AddTracksModal: React.FC<IAddTracksModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <Dialog
      fullWidth
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"Select tracks for adding"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <TracksList
            hiddenElements={hiddenElements}
            disabledEvents={disabledEvents}
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <AddTracksModalActions handleClose={handleClose} />
      </DialogActions>
    </Dialog>
  )
}

export default AddTracksModal;
