import { useContext } from "react";

//context
import { MenusContext } from "../../../Context/MenusContextProvider";

//navbar btns data
import { NavbarBtnsData } from "../NavbarBtnsData";

//mui
import IconButton from "@mui/material/IconButton";

//css
import styles from "./rightBtns.module.css"

//components
import Chat from "./Chat";
import Cart from "./Cart";
import Notification from "./Notification";
import Profile from "./Profile";

const RightBtns = () => {
    const { navBtnIsClicked, clickHandler } = useContext(MenusContext);

    return (
        <div className="d-flex position-relative">
            {NavbarBtnsData.map((item) => (
                <div>
                    <IconButton
                        key={item.id}
                        onClick={() => clickHandler(item.link)}
                    >
                        {item.icon}
                    </IconButton>
                </div>
            ))}
            <div className={styles.content_container}>
                {navBtnIsClicked.chats && <Chat />}
                {navBtnIsClicked.cart && <Cart />}
                {navBtnIsClicked.notification && <Notification />}
                {navBtnIsClicked.profile && <Profile />}
            </div>

        </div>
    );
};

export default RightBtns;
