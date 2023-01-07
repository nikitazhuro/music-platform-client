import { Box, TextField } from "@mui/material";

import { ITrackCreateDto } from "../../../../types/track";

interface ILoadImageStepProps {
  setTrackInputData: React.Dispatch<React.SetStateAction<ITrackCreateDto>>;
  trackInputData: ITrackCreateDto;
}

const LoadTrackInfoStep: React.FC<ILoadImageStepProps> = ({
  setTrackInputData,
  trackInputData,
}) => {
  return (
    <Box display="flex" flexDirection="column" p={5}>
      <TextField
        value={trackInputData.name}
        onChange={(e) => setTrackInputData((prev) => ({ ...prev, name: e.target.value }))}
        label="Track title"
      />
      <Box mt={2}>
        <TextField
          value={trackInputData.artist}
          onChange={(e) => setTrackInputData((prev) => ({ ...prev, artist: e.target.value }))}
          fullWidth
          label="Artist"
        />
      </Box>
    </Box>
  )
}

export default LoadTrackInfoStep;
