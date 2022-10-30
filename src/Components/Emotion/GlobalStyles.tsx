import { useContext } from "react";

// context
import { MenusContext } from "../../Context/MenusContextProvider";

import { Global, css } from '@emotion/react'

const GlobalStyles = () => {
    const { themeColors, themeMode } = useContext(MenusContext);
    return (
        <Global
            styles={css`
        ::-webkit-scrollbar {
        width: 6px !important;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            -ms-border-radius: 10px;
            -o-border-radius: 10px;
            background-color: ${themeColors.hex};
            height: 100px !important;
            min-height: 100px !important;
            max-height: 100px !important;
        }
        
        #sparkline_sparkline_line{
            stroke:${themeColors.hex};
        }

        body {
            background-color: ${themeMode === "dark" ?
                    "#222" : "var(--light-color-1)"};
        }
        
        .content-colors, .e-card, .rdw-editor-main, .rdw-editor-toolbar{
            background-color:${themeMode === "dark" ?
                    "#333" : "#fff"};
            color:${themeMode === "dark" ?
                    "#f5f5f5" : "#111"};
            border-radius:6px;
        }

        .e-card div{
            color:${themeMode === "dark" ?
                    "#f5f5f5" : "#111"} !important;  
        }
        .e-card:hover {
            background-color:${themeMode === "dark" ?
                    "#222" : "#f8f8f8"} !important;
        }
        .content-colors-1, .e-toggle-header, .e-content-cells{
            background-color:${themeMode === "dark" ?
                    "#444" : "#eee"} !important;
        }

        .e-toggle-header div{
            color:${themeMode === "dark" ?
                    "#fff" : "#000"} !important;    
        }

        .ecommerce-earning-filter::before{
            filter: ${themeMode === "dark" ?
                    "invert(85%) saturate(110%) hue-rotate(170deg)" : undefined};
        }

        .sidebar-link:hover{
            background-color: ${themeMode === "light" ?
                    "#eeeeee" : "#444"};
        }

        .shadow{
            box-shadow: ${themeMode === "light" ?
                    "var(--light-shadow)" : "var(--dark-shadow)"} !important;
        }

        .border-b{
            border-bottom: ${themeMode === "light" ?
                    "1px solid #ddd" : "1px solid #444"} !important;
        }

        .rs__cell,.css-cb7tj6:first-of-type, .rdw-editor-toolbar, .rdw-editor-main{
            border: ${themeMode === "light" ?
                    "1px solid #ddd" : "1px solid #444"} !important;
        }

        .MuiAvatar-root .MuiTypography-root{
            color:${themeMode === "dark" ?
                    "#f5f5f5" : "#111"};   
        }

        .rdw-option-wrapper, .rdw-dropdown-wrapper, .rdw-dropdown-optionwrapper{
            background-color:${themeMode === "dark" ?
                    "#444" : "#eee"} !important;
            border: ${themeMode === "light" ?
                    "1px solid #ddd" : "1px solid #444"} !important;
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

export default GlobalStyles;