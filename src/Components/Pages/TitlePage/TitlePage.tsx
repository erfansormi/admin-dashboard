import React from 'react'

// css
import styles from "./titlePage.module.css"

type Props = {
    title: string,
    category: string
}

const TitlePage = ({ title, category }: Props) => {
    return (
        <div className={styles.container}>
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