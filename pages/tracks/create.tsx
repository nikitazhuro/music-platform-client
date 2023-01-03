import { Button, Card, Grid, TextField, Box } from "@mui/material";
import React, { useState } from 'react';

import classes from '../../styles/trackCreatePage.module.scss';

import StepsWrapper from "../../components/PagesComponents/CreateTrackPage/StepsWrapper";
import NavBarWithPlayerLayout from "../../components/Layouts/NavBarWithPlayerLayout";
import CreatePageControls from "../../components/PagesComponents/CreateTrackPage/CreatePageControls";
import FileUploader from "../../components/UI/FileUploader";
import { useCreateTrackMutation } from "../../API/tracksAPI";
import { useRouter } from "next/router";
import { ITrackCreateDto } from "../../types/track";

function TrackCreatePage() {
  const router = useRouter();

  const [createTrackRequest, { isLoading }] = useCreateTrackMutation();

  const [activeStep, setActiveStep] = React.useState<number>(0)
  const [trackInputData, setTrackInputData] = useState({
    name: '',
    artist: '',
  })
  const [image, setImage] = useState('');
  const [audio, setAudio] = useState('');

  const createTrack = async () => {
    const formData = new FormData();

    formData.append('name', trackInputData.name);
    formData.append('artist', trackInputData.artist);
    formData.append('image', image);
    formData.append('audio', audio);

    await createTrackRequest(formData)
      .then(() => router.push('/tracks'));
  }

  return (
    <NavBarWithPlayerLayout>
      <Grid className={classes.trackCreatePage}>
        <StepsWrapper activeStep={activeStep}>
          <Card className={classes.mainCard}>
            {activeStep === 0 && (
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
            )}
            {activeStep === 1 && (
              <Box display="flex" height="100%" alignItems="center" justifyContent="space-between" p={5}>
                <Box width={100}>
                  awdawd
                </Box>
                <Box>
                  <h1>
                    Обложка трека
                  </h1>

                  <FileUploader accept="image/*" setFile={setImage}>
                    <Button>
                      Load an image
                    </Button>
                  </FileUploader>
                </Box>
              </Box>
            )}
            {activeStep === 2 && (
              <Box display="flex" flexDirection="column" p={5}>
                <FileUploader accept="audio/*" setFile={setAudio}>
                  <Button>
                    Load an audio
                  </Button>
                </FileUploader>
              </Box>
            )}
            <CreatePageControls
              createTrack={createTrack}
              setActiveStep={setActiveStep}
              activeStep={activeStep}
            />
          </Card>
        </StepsWrapper>
      </Grid>
    </NavBarWithPlayerLayout>
  )
}

export default TrackCreatePage;