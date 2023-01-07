import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";

import HeaderTitle from "../../../UI/Title/HeaderTitle";

function AlbumsCardHeader() {
  const router = useRouter();

  return (
    <Box pb={3}>
      <Grid container justifyContent="space-between">
        <HeaderTitle title="Albums list" />
        <Button onClick={() => router.push('/albums/create')}>
          Создать альбом
        </Button>
      </Grid>
    </Box>
  )
}

export default AlbumsCardHeader;