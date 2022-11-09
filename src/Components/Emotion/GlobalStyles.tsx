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
        }

        body {
            background-color: ${themeMode === "dark" ?
                    "var(--dark-body-bg)" : "var(--light-body-bg)"};
        }
        
        .content-colors{
            background-color:${themeMode === "dark" ?
                    "var(--dark-content-bg)" : "var(--light-content-bg)"};
            color:${themeMode === "dark" ?
                    "var(--dark-content-color)" : "var(--light-content-color)"};
            border-radius:var(--radius);
        }

        .content-colors-1{
            background-color:${themeMode === "dark" ?
                    "var(--sub-dark-content-bg)" : "var(--sub-light-content-bg)"} !important;
        }

        .neutral-color{
            color:var(--neutral);
        }

        .ecommerce-earning-filter::before{
            filter: ${themeMode === "dark" ?
                    "invert(85%) saturate(110%) hue-rotate(170deg)" : undefined};
        }

        .shadow{
            box-shadow: ${themeMode === "light" ?
                    "var(--light-shadow)" : "var(--dark-shadow)"} !important;
        }

        .border-b{
            border-bottom: ${themeMode === "light" ?
                    "var(--light-border)" : "var(--dark-border)"} !important;
        }

        .border-b:last-child{
            border-bottom:none !important;
        }

        .hover-list:hover{
            background-color:${themeMode === "light" ? "var(--light-hover-list)" : "var(--dark-hover-list)"}
        }
        `}
        />
    )
}

export default GlobalStyles;