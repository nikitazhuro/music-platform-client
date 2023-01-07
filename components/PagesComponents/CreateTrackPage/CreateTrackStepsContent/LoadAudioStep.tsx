import { Box, Button } from "@mui/material";
import { useState } from "react";

import FileUploader from "../../../UI/FileUploader";

import { ITrackCreateDto } from "../../../../types/track";

interface ILoadAudioStepProps {
  setTrackInputData: React.Dispatch<React.SetStateAction<ITrackCreateDto>>;
}

const LoadAudioStep: React.FC<ILoadAudioStepProps> = ({
  setTrackInputData,
}) => {
  const [audioBlob, setAudioBlob] = useState<string>('');

  const readAudio = (file: any) => {
    setAudioBlob(URL.createObjectURL(file));

    if (file) {
      let reader = new FileReader();
      let audio = new Audio();

      reader.onload = (e) => {
        audio.src = e.target?.result as string;

        audio.onloadedmetadata = () => {
          setTrackInputData((prev) => ({
            ...prev,
            duration: audio.duration.toString(),
            audio: file,
          }));
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
