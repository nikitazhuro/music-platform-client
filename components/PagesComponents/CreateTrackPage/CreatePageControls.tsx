import { Button, Grid } from "@mui/material";

interface ICreatePageControls {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const CreatePageControls: React.FC<ICreatePageControls> = ({
  setActiveStep,
  activeStep,
}) => {
  const backHandler = () => {
    setActiveStep((prev: number) => {
      if (prev !== 0) {
        return prev - 1
      };

      return prev;
    });
  }
  const nextHandler = () => {
    setActiveStep((prev: number) => {
      if (activeStep !== 2) {
        return prev + 1;
      }
      return prev;
    })
  }

  const createTrack = () => {

  }
  return (
    <Grid container justifyContent="space-between" px={5} pb={5}>
      <Button disabled={activeStep === 0} onClick={backHandler}>
        Back
      </Button>
      <Button onClick={activeStep === 2 ? createTrack : nextHandler}>
        {activeStep === 2 ? 'Create' : 'Next'}
      </Button>
    </Grid>
  )
}

export default CreatePageControls;