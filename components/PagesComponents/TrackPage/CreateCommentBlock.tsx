import { TextField, Box, Button } from "@mui/material"
import React, { useState } from "react";

import { useCreateCommentMutation } from "../../../API/commentAPI";

import { ICommentDto } from "../../../types/comment";

interface ICreateCommentBlockProps {
  trackUUID: string;
}

interface ICommentData {
  commentTitle: string;
  commentBody: string;
}

const CreateCommentBlock: React.FC<ICreateCommentBlockProps> = ({
  trackUUID,
}) => {
  const [createCommentRequst] = useCreateCommentMutation();
  const [commentData, setCommentData] = useState<ICommentData>({
    commentTitle: '',
    commentBody: '',
  })

  const onChangeCommentData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputID = e.target.id;

    setCommentData((prev) => ({ ...prev, [inputID]: e.target.value }))
  }

  const createComment = async () => {
    const config = {
      track_uuid: trackUUID,
      username: commentData.commentTitle,
      text: commentData.commentBody,
    } as ICommentDto;

    await createCommentRequst(config);
  }
  return (
    <Box width={600}>
      <h1>
        Write a comment:
      </h1>
      <Box mb={3} mt={1}>
        <TextField
          value={commentData.commentTitle}
          onChange={onChangeCommentData}
          id="commentTitle"
          label="Username"
        />
      </Box>
      <TextField
        value={commentData.commentBody}
        onChange={onChangeCommentData}
        id="commentBody"
        label="Text"
        fullWidth
        multiline
        rows={4}
      />
      <Box mt={2} display="flex" justifyContent="end">
        <Button onClick={createComment}>
          Create comment
        </Button>
      </Box>
    </Box>
  )
}

export default CreateCommentBlock;
