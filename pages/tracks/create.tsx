import { Card, Grid, TextField, Box } from "@mui/material";
import React, { useState } from 'react';
import { useRouter } from "next/router";

import classes from '../../styles/trackCreatePage.module.scss';

import StepsWrapper from "../../components/PagesComponents/CreateTrackPage/StepsWrapper";
import NavBarWithPlayerLayout from "../../components/Layouts/NavBarWithPlayerLayout";
import CreatePageControls from "../../components/PagesComponents/CreateTrackPage/CreatePageControls";

import { useCreateTrackMutation } from "../../API/tracksAPI";
import LoadImageStep from "../../components/PagesComponents/CreateTrackPage/CreateTrackStepsContent/LoadImageStep";
import LoadAudioStep from "../../components/PagesComponents/CreateTrackPage/CreateTrackStepsContent/LoadAudioStep";

export interface ITrackInputData {
  name: string;
  artist: string;
  duration: string;
}

function TrackCreatePage() {
  const router = useRouter();

  const [createTrackRequest] = useCreateTrackMutation();

  const [activeStep, setActiveStep] = React.useState<number>(0)
  const [trackInputData, setTrackInputData] = useState<ITrackInputData>({
    name: '',
    artist: '',
    duration: '',
  })
  const [image, setImage] = useState('');
  const [audio, setAudio] = useState('');

  const createTrack = async () => {
    const formData = new FormData();

    formData.append('name', trackInputData.name);
    formData.append('artist', trackInputData.artist);
    formData.append('duration', trackInputData.duration);
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
              <LoadImageStep setImage={setImage} />
            )}
            {activeStep === 2 && (
              <LoadAudioStep setTrackInputData={setTrackInputData} setAudio={setAudio} />
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