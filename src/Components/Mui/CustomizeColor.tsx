import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';


export const theme = createTheme({
    palette: {
        primary: {
            main: "rgb(44, 77, 184)",
            contrastText: '#fff',
        },
        error: {
            main: "#ff3838",
            contrastText: '#fff',
        },
        warning: {
            main: "#ff9f1a",
            contrastText: '#fff',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        }
    }
});

declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
    }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        neutral: true;
    }
}