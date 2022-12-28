import classes from './HeaderTitle.module.scss';

interface IHeaderTitleProps {
  title: string;
}

function HeaderTitle({ title }: IHeaderTitleProps) {
  return (
    <h1 className={classes.headerTitle} color="#1976d2">
      {title}
    </h1>
  )
}

export default HeaderTitle;