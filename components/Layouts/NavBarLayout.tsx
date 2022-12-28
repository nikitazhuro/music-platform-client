import { Container } from "@mui/material";

import NavBar from "../NavBar/NavBar";
import Player from "../Player/Player";

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
