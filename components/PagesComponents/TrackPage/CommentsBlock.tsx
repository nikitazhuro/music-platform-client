import { Delete } from "@mui/icons-material";
import { Box, Card } from "@mui/material";
import { useRouter } from "next/router";
import { useDeleteCommentMutation, useReadCommentsQuery } from "../../../API/commentAPI";
import { IComment } from "../../../types/comment";
import CustomIconButton from "../../UI/IconButton/CustomIconButton";

function CommentsBlock() {
  const router = useRouter();

  const query = {
    limit: 5,
    offset: 0,
    track_uuid: router.query.uuid,
  }

  const { data = [] } = useReadCommentsQuery(query);
  const [deleteCommentRequest] = useDeleteCommentMutation();


  const deleteComment = async (commentUUID: string) => {
    await deleteCommentRequest(commentUUID)
  }
  return (
    <>
      {data.map((comment: IComment) => (
        <Box key={comment.uuid} my={1}>
          <Card>
            <Box alignItems="center" display="flex" justifyContent="space-between" p={2}>
              <Box>
                <Box>
                  {comment.username}
                </Box>
                <span>
                  {comment.text}
                </span>
              </Box>
              <Box>
                <CustomIconButton onClick={() => deleteComment(comment.uuid)} size="medium">
                  <Delete />
                </CustomIconButton>
              </Box>
            </Box>
          </Card>
        </Box>
      ))}
    </>
  )
}

export default CommentsBlock;
