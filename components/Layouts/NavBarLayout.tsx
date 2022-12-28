import { Container } from "@mui/material";

import NavBar from "../GlobalComponents/NavBar/NavBar";
import Player from "../GlobalComponents/Player/Player";

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
      <Player />
    </>
  )
}

export default NavBarLayout;
