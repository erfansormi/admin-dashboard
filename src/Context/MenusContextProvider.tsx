import React, { createContext, useState } from "react";

// ts
export type KeyInitialValue = "cart" | "chats" | "notification" | "profile"

interface Props {
    children: React.ReactNode;
}

interface InitialState {
    cart: boolean;
    chats: boolean;
    notification: boolean;
    profile: boolean;
}

interface ContextValues {
    activeMenu: boolean,
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>,
    navBtnIsClicked: InitialState,
    setNavBtnIsClicked: React.Dispatch<React.SetStateAction<InitialState>>,
    clickHandler: (item: KeyInitialValue) => void,
}

//context
export const MenusContext = createContext({} as ContextValues);
const initialState = {
    cart: false,
    chats: false,
    notification: false,
    profile: false,
};

const MenusContextProvider = ({ children }: Props) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [navBtnIsClicked, setNavBtnIsClicked] = useState(initialState);

    const clickHandler = (item: KeyInitialValue) => {
        setNavBtnIsClicked({ ...initialState, [item]: !navBtnIsClicked[item] });
    };

    return (
        <MenusContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                navBtnIsClicked,
                setNavBtnIsClicked,
                clickHandler,
            }}
        >
            {children}
        </MenusContext.Provider>
    );
};

export default MenusContextProvider;