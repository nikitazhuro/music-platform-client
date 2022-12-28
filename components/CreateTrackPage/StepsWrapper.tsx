import { Button, Card, Grid, Step, StepLabel, Stepper } from "@mui/material";
import { Box, Container } from "@mui/system";

interface IStepsWrapper {
  children: React.ReactNode;
  activeStep: number;
}

const StepsWrapper: React.FC<IStepsWrapper> = ({
  children,
  activeStep,
}) => {
  const steps = ['Заполнение информации', 'Загрузка изображения', 'Загрузка трека']

  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>
              {step}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid container justifyContent="center" mt={10} mb={10}>
        {children}
      </Grid>
    </Container>
  )
}

export default StepsWrapper;
