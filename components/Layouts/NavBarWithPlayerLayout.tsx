import { Container } from "@mui/material";

import NavBar from "../GlobalComponents/NavBar/NavBar";
import PlayerRoot from "../GlobalComponents/Player/PlayerRoot";

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
      <PlayerRoot />
    </>
  )
}

export default NavBarWithPlayerLayout;
