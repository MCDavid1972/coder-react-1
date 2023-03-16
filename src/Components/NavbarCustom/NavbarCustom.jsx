import logo from "../../images/Logo.png";
import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Drawer,
  Box
} from "@mui/material";
import { Container } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import { NavLink } from "react-router-dom";



const NavbarCustom = ({navArrayLinks}) => {
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
            sx={{display: {xs:"flex", sm:"none"}}}
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

          <Box sx={{display:{xs: "none", sm: "block"}}          }>
            {
              navArrayLinks.map(item => (
                <Button
                 key={item.title}
                 componet={NavLink}
                 to={item.path}
                >
                  {item.title}
                
                </Button>))
            }
          </Box>
        <CardWidget />
       </Toolbar>
      </AppBar>
      <Drawer open={open} anchor="left" onClose={() => setOpen(false)} sx={{display: {xs:"flex", sm:"none"}}}>
          <NavListDrawer navArrayLinks={navArrayLinks}/>
      </Drawer>
    </Container>
     
     
     );
};

export default NavbarCustom;
