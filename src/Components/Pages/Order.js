import React from 'react'

//components
import OrderGrid from './OrderGrid'

//css
import styles from "./Order.module.css"

const Order = () => {
    return (
        <div style={{ background: "#fff" }}>
            <div className={`${styles.title_container}`}>
                <p>page</p>
                <h3>orders</h3>
            </div>
            <OrderGrid />
        </div>
    )
}

export default Order