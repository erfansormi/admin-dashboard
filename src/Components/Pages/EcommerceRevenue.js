import React from 'react'

//components
import SparkLineComponents from '../Charts/SparkLineComponents';
import ChartComponents from "../Charts/ChartComponents"

//css
import styles from "./EcommerceRevenue.module.css"

const EcommerceRevenue = () => {
    return (
        <>
            <div className={`row justify-content-center mt-3`}>
                <div className={`col-4 ${styles.data_box_1}`}>
                    <div className={`p-2`}>
                        <h6 className='text-capitalize'>
                            revenue updates
                        </h6>
                    </div>
                    <div className={`p-4`}>
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
                            <button className={`${styles.download_report_btn} text-capitalize btn`}>
                                download report
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`col-5 p-2 ${styles.data_box_2}`}>
                    <div className="d-flex flex-row-reverse">
                        <span className="mx-1 text-capitalize">expense</span>
                        <span className="mx-1 text-capitalize" style={{ color: "var(--green-500)" }}>budget</span>
                    </div>
                    <ChartComponents />
                </div>
            </div>

        </>
    );
}

export default EcommerceRevenue