interface IHeaderTitleProps {
  title: string;
}

function HeaderTitle({ title }: IHeaderTitleProps) {
  return (
    <h1>
      {title}
    </h1>
  )
}

export default HeaderTitle;