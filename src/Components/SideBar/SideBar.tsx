import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

//context
import { MenusContext } from "../../Context/MenusContextProvider"

//sidebar-data
import { sideBarData } from './SideBarData'

//mui
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { Drawer, Box, IconButton } from '@mui/material';

//css
import styles from "./SideBar.module.css"

const SideBar = () => {
    const { activeMenu, setActiveMenu, themeColors } = useContext(MenusContext)
    const handleClose = () => setActiveMenu(false);

    const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')) {
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
                    className={`shadow content-colors ${styles.aside_container}`}
                    sx={{ borderRadius: 0 }}
                >
                    <IconButton className={styles.close_menu_btn}>
                        <CancelOutlinedIcon />
                    </IconButton>
                    {
                        sideBarData.map(item =>
                            <div key={item.id} className={`${styles.title_container} d-flex flex-column`}>
                                <h5 className={`${styles.title}`}>{item.title}</h5>
                                <div className={`d-flex flex-column`}>

                                    {/* {menu links} */}
                                    {item.link.map(item =>
                                        <Link
                                            key={item.id}
                                            className={`${styles.link} sidebar-link hover-list ${window.location.pathname.split("/")[1] === item.name ? styles.active_li : ""}`}
                                            style={{
                                                backgroundColor: window.location.pathname.split("/")[1] === item.name ?
                                                    themeColors.hex : undefined
                                            }}
                                            to={`/${item.name}`} >
                                            <IconButton aria-label={item.name}>
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