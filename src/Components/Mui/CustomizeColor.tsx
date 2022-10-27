import * as React from 'react';
import { createTheme } from '@mui/material/styles';

export const primaryColor = "rgb(44, 77, 184)";
export const errorColor = "#ff3838";
export const warningColor = "#ff9f1a";
export const neutralColor = "#64748B";
export const cyanColor = "#48dbfb";
export const successColor = "#51d36d";

export const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: '#fff',
        },
        error: {
            main: errorColor,
            contrastText: '#fff',
        },
        warning: {
            main: warningColor,
            contrastText: '#fff',
        },
        neutral: {
            main: neutralColor,
            contrastText: '#fff',
            dark: "#505c6e"
        },
        cyan: {
            main: cyanColor,
            contrastText: '#fff',
            dark: "#2eacc7"
        },
        success: {
            main: successColor,
            contrastText: '#fff',
        }
    }
});

declare module '@mui/material/styles' {
    interface Palette {
        neutral: Palette['primary'];
        cyan: Palette['primary'];
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
        cyan?: PaletteOptions['primary'];
    }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        neutral: true;
        cyan: true;
    }
}