import { Box, Button } from "@mui/material";
import { useState } from "react";

import FileUploader from "../../../UI/FileUploader";

import { ITrackInputData } from "../../../../pages/tracks/create";

interface ILoadAudioStepProps {
  setAudio: React.Dispatch<React.SetStateAction<string>>;
  setTrackInputData: React.Dispatch<React.SetStateAction<ITrackInputData>>;
}

const LoadAudioStep: React.FC<ILoadAudioStepProps> = ({
  setAudio,
  setTrackInputData,
}) => {
  const [audioBlob, setAudioBlob] = useState('');

  const readAudio = (file: any) => {
    setAudioBlob(URL.createObjectURL(file));
    setAudio(file)

    let reader = new FileReader();

    if (file) {
      let audio = new Audio();

      reader.onload = (e) => {
        audio.src = e.target?.result as string;

        audio.onloadedmetadata = () => {
          setTrackInputData((prev) => ({ ...prev, duration: audio.duration.toString() }));
        }
      }

      reader.readAsDataURL(file);
    }
  }

  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%" p={5}>
      <Box>
        {audioBlob && (
          <audio
            loop
            controlsList="nodownload"
            controls
            src={audioBlob}>
          </audio>
        )}
      </Box>
      <Box>
        <FileUploader accept="audio/*" setFile={readAudio}>
          <Button>
            Load an audio
          </Button>
        </FileUploader>
      </Box>
    </Box>
  )
}

export default LoadAudioStep;
