import { useContext } from "react";

// context
import { MenusContext } from "../../Context/MenusContextProvider";

import { Global, css } from '@emotion/react'

const LibrarisStyles = () => {
    const { themeColors, themeMode } = useContext(MenusContext);
    return (
        <Global
            styles={css`        
        #sparkline_sparkline_line{
            stroke:${themeColors.hex};
        }
        
        .e-card, .rdw-editor-main, .rdw-editor-toolbar{
            background-color:${themeMode === "dark" ?
                    "var(--dark-content-bg)" : "var(--light-content-bg)"};
            color:${themeMode === "dark" ?
                    "var(--dark-content-color)" : "var(--light-content-color)"};
            border-radius:var(--radius);
        }

        .e-card div{
            color:${themeMode === "dark" ?
                    "var(--dark-content-color)" : "var(--light-content-color)"} !important;  
        }
        .e-card:hover {
            background-color:${themeMode === "dark" ?
                    "#222" : "#f8f8f8"} !important;
        }
        .e-toggle-header, .e-content-cells{
            background-color:${themeMode === "dark" ?
                    "var(--sub-dark-content-bg)" : "var(--sub-light-content-bg)"} !important;
        }

        .e-toggle-header div{
            color:${themeMode === "dark" ?
                    "#fff" : "#000"} !important;    
        }

        .rs__cell,.css-cb7tj6:first-of-type, .rdw-editor-toolbar, .rdw-editor-main{
            border: ${themeMode === "light" ?
                    "var(--light-border)" : "var(--dark-border)"} !important;
        }

        .MuiAvatar-root .MuiTypography-root{
            color:${themeMode === "dark" ?
                    "#f5f5f5" : "#111"};   
        }

        .rdw-option-wrapper, .rdw-dropdown-wrapper, .rdw-dropdown-optionwrapper{
            background-color:${themeMode === "dark" ?
                    "var(--sub-dark-content-bg)" : "var(--sub-light-content-bg)"} !important;
            border: ${themeMode === "light" ?
                    "var(--light-border)" : "var(--dark-border)"} !important;
        }

        .rdw-option-wrapper>img{
            filter:${themeMode === "dark" ? "invert(1)" : undefined};
        }

        .rdw-option-active, .rdw-dropdown-wrapper:hover, .rdw-dropdown-wrapper:active, .rdw-dropdown-optionwrapper:hover {
            background-color:${themeMode === "dark" ?
                    "#333" : "#ccc"} !important;
            box-shadow: 1px 1px 0px ${themeMode === "dark" ? "#444444" : "#bbb"} inset;
        }

        .rdw-dropdown-wrapper:hover, .rdw-option-wrapper:hover{
            background-color:${themeMode === "dark" ?
                    "#444" : "#ccc"} !important;
            box-shadow: 1px 1px 0px ${themeMode === "dark" ? "#333" : "#bbb"} inset;
        }

        .rdw-dropdownoption-active, .rdw-dropdownoption-default:hover {
            background: ${themeMode === "dark" ?
                    "#555" : "#ccc"} !important;
        }
        `}
        />
    )
}

export default LibrarisStyles;