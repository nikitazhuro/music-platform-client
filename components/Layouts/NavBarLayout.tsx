import { Container } from "@mui/material";

import NavBar from "../NavBar/NavBar";

interface INavBarLayoutProps {
  children: React.ReactNode
}

const NavBarLayout: React.FC<INavBarLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>
        {children}
      </Container>
    </>
  )
}

export default NavBarLayout;
