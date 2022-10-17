import React from 'react'

//components
import OrderGrid from './OrderGrid'
import TitlePage from '../TitlePage/TitlePage'

//css
import styles from "./Order.module.css"

const Order = () => {
    return (
        <div>
            <TitlePage title='order' />
            <OrderGrid />
        </div>
    )
}

export default Order