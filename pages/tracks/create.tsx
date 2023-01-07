import { Card, Grid } from "@mui/material";
import React, { useState } from 'react';
import { useRouter } from "next/router";

import classes from '../../styles/trackCreatePage.module.scss';

import StepsWrapper from "../../components/PagesComponents/CreateTrackPage/StepsWrapper";
import NavBarWithPlayerLayout from "../../components/Layouts/NavBarWithPlayerLayout";
import CreatePageControls from "../../components/PagesComponents/CreateTrackPage/CreatePageControls";
import LoadImageStep from "../../components/PagesComponents/CreateTrackPage/CreateTrackStepsContent/LoadImageStep";
import LoadAudioStep from "../../components/PagesComponents/CreateTrackPage/CreateTrackStepsContent/LoadAudioStep";
import LoadTrackInfoStep from "../../components/PagesComponents/CreateTrackPage/CreateTrackStepsContent/LoadTrackInfoStep";

import { useCreateTrackMutation } from "../../API/tracksAPI";
import { ITrackCreateDto } from "../../types/track";

function TrackCreatePage() {
  const router = useRouter();

  const [createTrackRequest] = useCreateTrackMutation();

  const [activeStep, setActiveStep] = React.useState<number>(0)
  const [trackInputData, setTrackInputData] = useState<ITrackCreateDto>({
    name: '',
    artist: '',
    duration: '',
    image: '',
    audio: '',
  })

  const createTrack = async () => {
    const formData = new FormData();

    formData.append('name', trackInputData.name);
    formData.append('artist', trackInputData.artist);
    formData.append('duration', trackInputData.duration);
    formData.append('image', trackInputData.image);
    formData.append('audio', trackInputData.audio);

    await createTrackRequest(formData)
      .then(() => router.push('/tracks'));
  }

  return (
    <NavBarWithPlayerLayout>
      <Grid className={classes.trackCreatePage}>
        <StepsWrapper activeStep={activeStep}>
          <Card className={classes.mainCard}>
            {activeStep === 0 && (
              <LoadTrackInfoStep
                trackInputData={trackInputData}
                setTrackInputData={setTrackInputData}
              />
            )}
            {activeStep === 1 && (
              <LoadImageStep setTrackInputData={setTrackInputData} />
            )}
            {activeStep === 2 && (
              <LoadAudioStep setTrackInputData={setTrackInputData} />
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