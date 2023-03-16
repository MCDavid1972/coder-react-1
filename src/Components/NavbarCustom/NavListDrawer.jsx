import {
  ListItem,
  List,
  ListItemButton,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const NavListDrawer = ({navArrayLinks}) => {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navArrayLinks.map((item) => (
            <ListItem disablePadding key={item.title} >
              <ListItemButton component="a" href={item.categoria} text>
                {item.title}
              </ListItemButton>
            </ListItem>
          ))
          }
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
