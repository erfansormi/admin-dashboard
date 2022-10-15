import React, { useContext, useEffect } from 'react'
import { Route, Routes } from "react-router-dom"

//components
import SideBar from './SideBar';
import NavbarBtns from './Navbar/NavbarBtns';
import Ecommerce from "./Pages/Ecommerce"
import Order from "./Pages/Order"
import Employees from "./Pages/Employees"

//css
import styles from "./Dashboard.module.css"

//context
import { MenusContext } from '../Context/MenusContextProvider';

//icons
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';



const Dashboard = () => {
    const { activeMenu, setActiveMenu, screenSize, setScreenSize } = useContext(MenusContext)

    useEffect(() => {
        const resizeHandler = () => setScreenSize(window.innerWidth)
        window.addEventListener("resize", resizeHandler)
        resizeHandler()

        if (screenSize <= 768) {
            setActiveMenu(false)
        } else if (screenSize > 768) {
            setActiveMenu(false)
        }

    }, [screenSize])

    return (
        <>
            {/* sidebar */}
            {activeMenu && < SideBar />
                // :
                // <div className="col-1">
                //     <IconButton className={`${styles.menu_icon_btn}`}
                //         onClick={() => setActiveMenu((prevState) => !prevState)}>
                //         <MenuIcon />
                //     </IconButton>
                // </div>
            }

            {/* navbar btns */}
            <NavbarBtns />

            {/* setting */}
            <button className={`btn btn-lg btn-primary ${styles.setting_btn}`}>
                <SettingsOutlinedIcon />
            </button>

            {/* center content */}
            {/* <div className={activeMenu ? `col-9 offset-5` : `col-8 offset-5`}> */}
            <div className={`container`}>
                <Routes>
                    <Route path='/ecommerce' element={<Ecommerce />} />
                    <Route path='/orders' element={<Order />} />
                    <Route path='/employees' element={<Employees />} />
                </Routes>
            </div>
        </>
    )
}

export default Dashboard