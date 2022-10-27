import { useContext } from "react";

// context
import { MenusContext } from "../../Context/MenusContextProvider";

import { Global, css } from '@emotion/react'

const GlobalStyles = () => {
    const { themeColors } = useContext(MenusContext);
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
        }`}
        />
    )
}

export default GlobalStyles;