import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';

//context
import { MenusContext } from "../../Context/MenusContextProvider"

//sidebar-data
import { sideBarData } from './SideBarData'

//mui
import IconButton from '@mui/material/IconButton';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Drawer, Box } from '@mui/material';

//css
import styles from "./SideBar.module.css"

const SideBar = () => {
    const { activeMenu, setActiveMenu } = useContext(MenusContext)
    const handleClose = () => setActiveMenu(false);

    const toggleDrawer = (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        handleClose();
    };

    return (
        <>
            <Drawer
                anchor={"left"}
                open={activeMenu}
                onClose={handleClose}
            >
                <Box
                    role="presentation"
                    onClick={(e) => toggleDrawer(e)}
                    onKeyDown={(e) => toggleDrawer(e)}
                    className={`shadow ${styles.aside_container}`}
                >
                    {
                        sideBarData.map(item =>
                            <div key={item.id} className={`${styles.title_container} d-flex flex-column`}>
                                <h5 className={`${styles.title}`}>{item.title}</h5>
                                <div className={`d-flex flex-column`}>

                                    {/* {menu links} */}
                                    {item.link.map(item =>
                                        <Link key={item.id} className={`${styles.link}`}
                                            to={`/${item.name}`} >
                                            <IconButton aria-label="delete">
                                                {item.icon}
                                            </IconButton>
                                            <span>
                                                {item.name}
                                            </span>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        )
                    }
                </Box>
            </Drawer>
        </>
    )
}

export default SideBar