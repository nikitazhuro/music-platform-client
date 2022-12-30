import { Box } from "@mui/material";

interface IPlayerProgressProps {
  left: number;
  right: number;
  width?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlayerProgress: React.FC<IPlayerProgressProps> = ({
  left,
  right,
  width,
  onChange,
}) => {
  return (
    <>
      <Box display="flex" alignItems="center" width={width}>
        <input
          className="inputRange"
          type="range"
          min={0}
          max={right}
          value={left}
          onChange={onChange}
        />
      </Box>
      <style>
        {`
        .inputRange {
          width: 100%;
        }
      `}
      </style>
    </>
  )
}

export default PlayerProgress;
