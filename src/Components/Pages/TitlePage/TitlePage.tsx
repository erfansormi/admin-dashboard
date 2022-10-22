import React from 'react'

// css
import styles from "./titlePage.module.css"

type Props = {
    title: string,
    category: string,
    style?: any
}

const TitlePage = ({ title, category, style }: Props) => {
    return (
        <div className={styles.container} style={style}>
            <div>
                <span>{category}</span>
            </div>
            <div>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default TitlePage