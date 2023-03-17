import logo from "../../images/Logo.png";
import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Drawer,

} from "@mui/material";
import { Container } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";




const NavbarCustom = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <Container maxWidth="xl">
      
      <AppBar
        position="static"
        maxWidth="xl"
        sx={{ bgcolor: "#f957b8", height: "10vh" }}
        >
        <Toolbar>
          <IconButton 
            size="large"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Button>
            <Link to="/">
              <img
                src={logo}
                alt=""
                className={logo}
                style={{ width: "80px", height: "70px" }}
              />
            </Link>
          </Button>
            <Link to="/category/didacticos">
              <Button>Didacticos</Button>
            </Link>
          
            <Link to="/category/trofeos">
              <Button>Trofeos</Button>
            </Link>
            <Link to="/category/hogar">
              <Button>Hogar</Button>
            </Link>
          
            
        <CardWidget />
       </Toolbar>
      </AppBar>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)}>
          <NavListDrawer />
      </Drawer>
    </Container>
     
     
     );
};

export default NavbarCustom;
