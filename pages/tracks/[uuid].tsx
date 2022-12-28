import classes from '../../styles/trackPage.module.scss';

import NavBarLayout from "../../components/Layouts/NavBarLayout";
import GoBackBlock from "../../components/TrackPage/GoBackBlock";
import { Card, Grid } from '@mui/material';
import { ITrack } from '../../types/track';
import TrackPageHeader from '../../components/TrackPage/TrackPageHeader';
import { Box } from '@mui/system';
import CreateCommentBlock from '../../components/TrackPage/CreateCommentBlock';

function TrackPage() {
  const track: ITrack = {
    uuid: '1', name: 'Track1', artist: 'Alfred', listens: 0, audio: '', image: 'http://localhost:3001/image/25e457e1-37cf-432d-a780-cd6d4f26519b.jpg', comments: []
  }
  return (
    <NavBarLayout>
      <Grid mb={2} className={classes.trackPage}>
        <GoBackBlock />
      </Grid>
      <Card>
        <Box p={3}>
          <TrackPageHeader track={track} />
        </Box>
        <Box p={3}>
          <CreateCommentBlock />
        </Box>
      </Card>
    </NavBarLayout>
  )
}

export default TrackPage;