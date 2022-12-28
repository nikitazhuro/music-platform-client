import { TextField } from "@mui/material"
import { Box } from "@mui/system"

const CreateCommentBlock: React.FC = ({

}) => {
  return (
    <Box width={600}>
      <h1>
        Write a comment:
      </h1>
      <Box mb={3} mt={1}>
        <TextField label="Username" />
      </Box>
      <TextField label="Text" fullWidth multiline rows={4} />
    </Box>
  )
}

export default CreateCommentBlock;
