import { Box, Button } from "@mui/material";
import { useState } from "react";
import FileUploader from "../../../UI/FileUploader";

const LoadAudioStep: React.FC = () => {
  const [audio, setAudio] = useState('');
  const [audioBlob, setAudioBlob] = useState('');

  const loadAnImage = (audio: any) => {
    setAudio(audio)
    setAudioBlob(URL.createObjectURL(audio));
  }

  return (
    <Box display="flex" flexDirection="column" p={5}>
      <Box mr={4}>
        {audioBlob && (
          <audio
            controls
            src={audioBlob}>
          </audio>
        )}
      </Box>
      <Box ml={4}>
        <FileUploader accept="audio/*" setFile={loadAnImage}>
          <Button>
            Load an audio
          </Button>
        </FileUploader>
      </Box>
    </Box>
  )
}

export default LoadAudioStep;
