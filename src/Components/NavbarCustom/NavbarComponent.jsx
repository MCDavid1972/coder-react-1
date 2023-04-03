import styles from "./NavbarCustom.module.css";
import logo from "../../images/Logo.png";
import CardWidget from "../CardWidget/CardWidget";
import { Link } from "react-router-dom";
import { AppBar, Button, Container, Toolbar } from "@mui/material";




const NavbarComponent = ({ categoryList }) => {
  return (
       <Container maxWidth="100vw" >
         <AppBar
             position="static"
             maxWidth="xl"
             sx={{ maxWidth: "xl", bgcolor: "#f957b8" }}
         >
             <Toolbar >
             <Button as={Link} to="/">
                 <img
                     src={logo}
                     alt=""
                     className={logo}
                     style={{ width: "80px", height: "70px" }}
                 />
             </Button>
             {categoryList.map((category) => {
                 return (
                 <Button as={Link} key={category.id} to={category.path}>
                     {category.title}
                 </Button>
                 );
             })}
    
             <CardWidget />
             </Toolbar>
             
         </AppBar>
     </Container>
    



  )
    }
    
    export default NavbarComponent




