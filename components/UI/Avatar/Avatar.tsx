import Image from "next/image";

import classes from './Avatar.module.scss';

interface IAvatar {
  src: string;
  width: number;
  height: number;
}

const Avatar: React.FC<IAvatar> = ({
  src,
  width,
  height,
}) => {
  return (
    <Image className={classes.Avatar} src={src} width={width} height={height} alt="alt" />
  )
}

export default Avatar;
