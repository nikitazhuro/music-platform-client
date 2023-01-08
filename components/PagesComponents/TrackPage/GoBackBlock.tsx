import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";

interface IGoBackBlockProps {
  path: string
}

const GoBackBlock: React.FC<IGoBackBlockProps> = ({
  path,
}) => {
  const router = useRouter();

  return (
    <Grid>
      <Button onClick={() => router.push(path)}>
        Go back
      </Button>
    </Grid>
  )
}

export default GoBackBlock;
