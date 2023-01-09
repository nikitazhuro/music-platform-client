import { Box, Card } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

import TracksList from "../TracksPage/TracksCard/TracksList";
import AlbumPageHeader from "./AlbumPageHeader";

import { useLazyGetAlbumQuery } from "../../../API/albumsAPI";
import { useActions } from "../../../hooks/useActions";
import { ITrack } from "../../../types/track";

const hiddenElements = ['addToAlbumBtn', 'deleteTrackBtn'];

const AlbumPageContent: React.FC = () => {
  const router = useRouter();

  const { setDefaultAlbumTracks } = useActions();

  const [fetchAlbum, { data = [], isLoading }] = useLazyGetAlbumQuery();

  useEffect(() => {
    if (data) {
      const tracksUUID = data?.tracks?.map((elem: ITrack) => elem.uuid) || [];

      setDefaultAlbumTracks(tracksUUID);
    }
  }, [data]);

  useEffect(() => {
    if (router.query.uuid) {
      fetchAlbum(router.query.uuid as string);
    }
  }, [router.query.uuid])

  return (
    <Card>
      {!isLoading && (
        <Box p={2}>
          <AlbumPageHeader album={data} />
          <Box my={2}>
            <hr />
          </Box>
          <TracksList
            customData={data?.tracks || []}
            hiddenElements={hiddenElements}
          />
        </Box>
      )}
    </Card>
  )
}

export default AlbumPageContent;
