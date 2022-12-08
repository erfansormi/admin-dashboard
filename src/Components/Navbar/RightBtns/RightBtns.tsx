import { useContext } from "react";

//context
import { MenusContext } from "../../../Context/MenusContextProvider";

//navbar btns data
import { NavbarBtnsData } from "../NavbarBtnsData";

//mui
import IconButton from "@mui/material/IconButton";

//css
import styles from "./rightBtns.module.css"

const RightBtns = () => {
    const { navBtnIsClicked, clickHandler, themeColors } = useContext(MenusContext);

    return (
        <div className="d-flex">
            {NavbarBtnsData.map((item) =>
                <div className={styles.container}>
                    <IconButton
                        key={item.id}
                        onClick={() => clickHandler(item.link)}
                        color={themeColors.name}
                    >
                        {item.icon}
                    </IconButton>
                    {
                        navBtnIsClicked[item.link] ?
                            <div className={styles.content_container}>
                                {item.component}
                            </div> : null
                    }
                </div>
            )}
        </div>
    );
};

export default RightBtns;
