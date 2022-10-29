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
    // localStorages
    const LSThemeColors = window.localStorage.getItem("theme-color");
    const LSThemeMode = window.localStorage.getItem("theme-mode");

    // states
    const [activeMenu, setActiveMenu] = useState(false);
    const [navBtnIsClicked, setNavBtnIsClicked] = useState(initialState);
    const [activeSetting, setActiveSetting] = useState(false);
    const [themeMode, setThemeMode] = useState<"light" | "dark">(()=>{
        if(typeof LSThemeMode === "string" && JSON.parse(LSThemeMode)){
            return JSON.parse(LSThemeMode);
        }
        else{
            return "light";
        }
    });
    const [themeColors, setThemeColors] = useState<IThemeColors>(() => {
        if (typeof LSThemeColors === "string" && JSON.parse(LSThemeColors)) {
            return JSON.parse(LSThemeColors);
        }
        else {
            return {
                name: "primary" as ThemeColors,
                hex: primaryColor as string
            }
        }
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
