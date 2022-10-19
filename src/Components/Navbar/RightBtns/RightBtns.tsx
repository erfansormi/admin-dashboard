import { useContext } from "react";

//context
import { MenusContext } from "../../../Context/MenusContextProvider";

//navbar btns data
import { NavbarBtnsData } from "../NavbarBtnsData";

//mui
import IconButton from "@mui/material/IconButton";

//components
import Chat from "./Chat";
import Cart from "./Cart";
import Notification from "./Notification";
import Profile from "./Profile";

const RightBtns = () => {
    const { navBtnIsClicked, clickHandler } = useContext(MenusContext);

    return (
        <div>
            {NavbarBtnsData.map((item) => (
                <IconButton
                    className="position-relative"
                    key={item.id}
                    onClick={() => clickHandler(item.link)}
                >
                    {item.icon}
                </IconButton>
            ))}

            {navBtnIsClicked.chats && <Chat />}
            {navBtnIsClicked.cart && <Cart />}
            {navBtnIsClicked.notification && <Notification />}
            {navBtnIsClicked.profile && <Profile />}
        </div>
    );
};

export default RightBtns;