import React from 'react'

//components
import OrderGrid from './OrderGrid'

//css
import styles from "./Order.module.css"

const Order = () => {
    return (
        <div>
            <div className={`page-title`}>
                <p>page</p>
                <h3>orders</h3>
            </div>
            <OrderGrid />
        </div>
    )
}

export default Order