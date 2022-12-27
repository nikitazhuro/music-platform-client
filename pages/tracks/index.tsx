import { Card } from "@mui/material";

import classes from '../../styles/tracks.module.scss';
import NavBarLayout from "../../components/Layouts/NavBarLayout";
import TracksCardHeader from "../../components/TracksPage/TracksCard/TracksCardHeader";
import TracksList from "../../components/TracksPage/TracksCard/TracksList";

function TracksPage() {
  return (
    <NavBarLayout>
      <Card className={classes.TracksCard}>
        <TracksCardHeader />
        <hr />
        <TracksList />
      </Card>
    </NavBarLayout>
  )
}

export default TracksPage;
