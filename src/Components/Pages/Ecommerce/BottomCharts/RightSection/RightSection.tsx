import { useContext } from 'react'

// context
import { MenusContext } from "../../../../../Context/MenusContextProvider"

//css
import styles from "../EcommerceRevenue.module.css"

// components
import ChartComponents from './ChartComponents'

const RightSection = () => {
    const { themeColors } = useContext(MenusContext);

    return (
        <div className={`col-5 content-colors text-capitalize shadow ${styles.data_box_2}`}>
            <div className="d-flex flex-row-reverse">
                <span className="mx-1">expense</span>
                <span className="mx-1" style={{ color: themeColors.hex }}>budget</span>
            </div>
            <ChartComponents />
        </div>
    )
}

export default RightSection