import { IconButton } from "@mui/material";

import classes from './CustomIconButton.module.scss';

type TSize = 'small' | 'medium' | 'large';

interface IIconButton {
  children: React.ReactNode;
  size?: TSize;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const CustomIconButton: React.FC<IIconButton> = ({
  children,
  size = 'small',
  onClick,
}) => {
  return (
    <IconButton onClick={onClick} className={classes[size]}>
      {children}
    </IconButton>
  )
}

export default CustomIconButton;