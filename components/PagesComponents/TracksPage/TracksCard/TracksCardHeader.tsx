import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";

import HeaderTitle from "../../../UI/Title/HeaderTitle";

function TracksCardHeader() {
  const router = useRouter();

  return (
    <Box pb={3}>
      <Grid container justifyContent="space-between">
        <HeaderTitle title="Track list" />
        <Button onClick={() => router.push('/tracks/create')}>
          Загрузить
        </Button>
      </Grid>
    </Box>
  )
}

export default TracksCardHeader;