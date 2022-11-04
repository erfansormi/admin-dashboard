import React, { useContext } from 'react'

// context
import { MenusContext } from "../../../../Context/MenusContextProvider";

// mui
import { IconButton } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

// css
import styles from "../rightBtns.module.css"

// ts
interface Props {
    children: React.ReactNode,
    title: string,
    style?: any
}

const RightBtnsContent = ({ children, title, style }: Props) => {
    const { handleCloseNavBtns } = useContext(MenusContext);

    return (
        <div className={`${styles.content} shadow content-colors`} style={style}>
            <div className={styles.layout_container}>
                <div className="align-center justify-between px-0">
                    <h5 style={{ fontSize: "1.15rem" }}>
                        {title}
                    </h5>
                    <IconButton onClick={handleCloseNavBtns} color={"inherit"}>
                        <CloseIcon />
                    </IconButton>
                </div>
                {children}
            </div>
        </div>
    )
}

export default RightBtnsContent