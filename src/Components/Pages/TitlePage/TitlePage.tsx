import React from 'react'

// css
import styles from "./titlePage.module.css"

type Props = {
    title: string
}

const TitlePage = ({ title }: Props) => {
    return (
        <div className={styles.container}>
            <div>
                <span>page</span>
            </div>
            <div>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default TitlePage