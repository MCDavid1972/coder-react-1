import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider} from "@mui/material";


const theme = createTheme ({
    palette: {
        type: 'light',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#f957b8',
        },
    }
})


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>
);
