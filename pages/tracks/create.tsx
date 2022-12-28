import { Button, Card, Grid, TextField } from "@mui/material";
import React, { useState } from 'react';
import { Box } from "@mui/system";

import classes from '../../styles/trackCreatePage.module.scss';

import StepsWrapper from "../../components/CreateTrackPage/StepsWrapper";
import NavBarLayout from "../../components/Layouts/NavBarLayout";
import CreatePageControls from "../../components/CreateTrackPage/CreatePageControls";
import { FileUpload } from "@mui/icons-material";
import FileUploader from "../../components/UI/FileUploader";

function TrackCreatePage() {
  const [activeStep, setActiveStep] = React.useState<number>(0)
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);

  console.log(image);

  return (
    <NavBarLayout>
      <Grid className={classes.trackCreatePage}>
        <StepsWrapper activeStep={activeStep}>
          <Card className={classes.mainCard}>
            {activeStep === 0 && (
              <Box display="flex" flexDirection="column" p={5}>
                <TextField label="Track title" />
                <Box mt={2}>
                  <TextField fullWidth label="Artist" />
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
            <CreatePageControls setActiveStep={setActiveStep} activeStep={activeStep} />
          </Card>
        </StepsWrapper>
      </Grid>
    </NavBarLayout>
  )
}

export default TrackCreatePage;