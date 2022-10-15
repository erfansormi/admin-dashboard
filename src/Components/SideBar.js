import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

//context
import { MenusContext } from "../Context/MenusContextProvider"

//sidebar-data
import { sideBarData } from '../Data/SideBarData'

//mui
import IconButton from '@mui/material/IconButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

//react-bootstrap
import { Offcanvas } from "react-bootstrap"

//css
import styles from "./SideBar.module.css"

const SideBar = () => {
    const { activeMenu, setActiveMenu, screenSize, setScreenSize } = useContext(MenusContext)

    const handleClose = () => setActiveMenu(false);

    const showSidebarHandler = () => {
        if (screenSize <= 768) {
            setActiveMenu(false)
        } else if (screenSize > 768) {
            setActiveMenu(false)
        }
    }

    return (
        // <aside className={`col-3 shadow ${styles.aside_container}`}>
        <Offcanvas show={activeMenu} onHide={handleClose}
            className={`shadow ${styles.aside_container}`}>

            {
                sideBarData.map(item =>
                    <div key={item.id} className={`${styles.title_container} d-flex flex-column`}>
                        <h5 className={`${styles.title}`}>{item.title}</h5>
                        <div className={`d-flex flex-column`}>

                            {/* {menu links} */}
                            {item.link.map(item =>
                                <Link key={item.id} className={`${styles.link}`}
                                    onClick={showSidebarHandler} to={`/${item.name}`} >
                                    <IconButton aria-label="delete">
                                        {item.icon}
                                    </IconButton>
                                    <span>
                                        {item.name}
                                    </span>
                                </Link>
                            )}

                        </div>
                    </div>)
            }

            {/* close menu */}
            <IconButton className={`${styles.close_menu_btn}`}
                onClick={() => setActiveMenu(false)}>
                <CancelOutlinedIcon sx={{ color: "red" }} />
            </IconButton>
        </Offcanvas>
        // </aside >
    )
}

export default SideBar