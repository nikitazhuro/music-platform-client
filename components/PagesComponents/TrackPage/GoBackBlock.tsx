import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";

const GoBackBlock: React.FC = () => {
  const router = useRouter();

  return (
    <Grid>
      <Button onClick={() => router.push('/tracks')}>
        Go back
      </Button>
    </Grid>
  )
}

export default GoBackBlock;
