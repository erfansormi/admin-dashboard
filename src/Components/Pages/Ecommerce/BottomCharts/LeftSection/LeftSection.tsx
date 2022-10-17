import React from 'react'

// mui
import { Button } from '@mui/material';

//css
import styles from "../EcommerceRevenue.module.css"

//components
import SparkLineComponents from './SparkLineComponents';

const LeftSection = () => {
    return (
        <div className={`col-4 ${styles.data_box_1}`}>
            <div className={``}>
                <h6 className='text-capitalize'>
                    revenue updates
                </h6>
            </div>
            <div className={``}>
                <div className={`mb-4`}>
                    <h5>${Number(93451).toLocaleString()}
                        <span className={`${styles.percent_btn}`}>14%</span>
                    </h5>
                    <span className='text-capitalize' style={{ fontSize: 12, color: "var(--bs-gray-600)" }}>
                        budget
                    </span>
                </div>
                <div className={`mb-1`}>
                    <h5>${Number(48485).toLocaleString()}</h5>
                    <span className='text-capitalize' style={{ fontSize: 12, color: "var(--bs-gray-600)" }}>
                        expense
                    </span>
                </div>
                <SparkLineComponents />
                <div className="mt-4">
                    <Button className={`${styles.download_report_btn}`}>
                        download report
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LeftSection;