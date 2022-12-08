import { useContext } from 'react'

// context
import { MenusContext } from "../../../../../Context/MenusContextProvider"

//css
import styles from "../EcommerceRevenue.module.css"

// components
import ExpenseChart from './ChartComponents'

const RightSection = () => {
    const { themeColors } = useContext(MenusContext);

    return (
        <div className={`content-colors text-capitalize shadow ${styles.data_box_2}`}>
            <ExpenseChart />
        </div>
    )
}

export default RightSection