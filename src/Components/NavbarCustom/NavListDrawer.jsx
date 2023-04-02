import {
  ListItem,
  List,
  Button,
  
  
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const NavListDrawer = () => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
           <ListItem disablePadding  >
                <Button as={Link} to= "/category/didacticos">
                   Didacticos
                </Button>
            </ListItem>
            {/* <ListItem disablePadding  >
              <ListItemButton component="a" href="" text>
                <Link to= "/category/trofeos">
                   Trofeos
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding  >
              <ListItemButton component="a" href="" text>
                <Link to= "/category/hogar">
                   Hogar
                </Link>
              </ListItemButton>
            </ListItem> */}
          
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
