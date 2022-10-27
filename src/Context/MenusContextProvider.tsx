import React, { createContext, useState } from "react";

// data
import { primaryColor } from "../Components/Mui/CustomizeColor";

// ts
export type KeyInitialValue = "cart" | "chats" | "notification" | "profile";
export type ThemeColors = "error" | "primary" | "warning" | "neutral" | "success" | "cyan";

interface Props {
    children: React.ReactNode;
}

interface IThemeColors {
    name: ThemeColors,
    hex: string,
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
    activeSetting: boolean,
    setActiveSetting: React.Dispatch<React.SetStateAction<boolean>>,
    themeMode: "light" | "dark",
    setThemeMode: React.Dispatch<React.SetStateAction<"light" | "dark">>,
    themeColors: IThemeColors,
    setThemeColors: React.Dispatch<React.SetStateAction<IThemeColors>>
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
    const [activeSetting, setActiveSetting] = useState(false);
    const [themeMode, setThemeMode] = useState<"light" | "dark">("light");
    const [themeColors, setThemeColors] = useState<IThemeColors>({
        name: "primary" as ThemeColors,
        hex: primaryColor as string
    })

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
                activeSetting,
                setActiveSetting,
                themeMode,
                setThemeMode,
                themeColors,
                setThemeColors
            }}
        >
            {children}
        </MenusContext.Provider>
    );
};

export default MenusContextProvider;
