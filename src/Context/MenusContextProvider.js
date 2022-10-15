import React, { createContext, useState } from 'react'

//context
export const MenusContext = createContext()
const initialState = {
    cart: false,
    chats: false,
    notification: false,
    profile: false,
}

const MenusContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false)
    const [navBtnIsClicked, setNavBtnIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState(undefined)

    const clickHandler = (item) => {
        setNavBtnIsClicked({ ...initialState, [item]: !navBtnIsClicked[item] })
    }

    return (
        <MenusContext.Provider value={{
            activeMenu, setActiveMenu, navBtnIsClicked,
            setNavBtnIsClicked, clickHandler, screenSize, setScreenSize
        }}>
            {children}
        </MenusContext.Provider>
    )
}

export default MenusContextProvider