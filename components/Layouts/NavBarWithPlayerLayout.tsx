import { Container } from "@mui/material";

import NavBar from "../GlobalComponents/NavBar/NavBar";
import Player from "../GlobalComponents/Player/Player";

interface INavBarWithPlayerLayoutProps {
  children: React.ReactNode
}

const NavBarWithPlayerLayout: React.FC<INavBarWithPlayerLayoutProps> = ({ children }) => {
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

export default NavBarWithPlayerLayout;
