import { Card } from "@mui/material";

import classes from '../../styles/tracks.module.scss';
import NavBarLayout from "../../components/Layouts/NavBarLayout";
import TracksCardHeader from "../../components/TracksPage/TracksCard/TracksCardHeader";

function TracksPage() {
  return (
    <NavBarLayout>
      <Card className={classes.TracksCard}>
        <TracksCardHeader />
      </Card>
    </NavBarLayout>
  )
}

export default TracksPage;
