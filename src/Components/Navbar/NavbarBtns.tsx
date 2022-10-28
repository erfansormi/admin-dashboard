import React, { useContext, useMemo } from "react";

//context
import { MenusContext } from "../../Context/MenusContextProvider";

//css
import styles from "./NavbarBtns.module.css";

//mui
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

// components
import RightBtns from "./RightBtns/RightBtns";

const NavbarBtns = () => {
    const { setActiveMenu, themeColors } = useContext(MenusContext);

    return (
        <nav className={`${styles.navbar} w-100`}>
            <div>
                <IconButton color={themeColors.name} onClick={() => setActiveMenu((prevState) => !prevState)}>
                    <MenuIcon />
                </IconButton>
            </div>
            <RightBtns />
        </nav>
    );
};

export default NavbarBtns;
