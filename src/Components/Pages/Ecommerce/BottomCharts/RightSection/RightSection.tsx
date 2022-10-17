import React from 'react'

//css
import styles from "../EcommerceRevenue.module.css"

// components
import ChartComponents from './ChartComponents'

const RightSection = () => {
    return (
        <div className={`col-5 ${styles.data_box_2}`}>
            <div className="d-flex flex-row-reverse">
                <span className="mx-1">expense</span>
                <span className="mx-1" style={{ color: "var(--green-300)" }}>budget</span>
            </div>
            <ChartComponents />
        </div>
    )
}

export default RightSection