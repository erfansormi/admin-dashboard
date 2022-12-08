import { useContext } from 'react'

// context
import { MenusContext } from "../../../../../Context/MenusContextProvider"

// mui
import { Button } from '@mui/material';

//css
import styles from "../EcommerceRevenue.module.css"

//components
import SparkLineComponents from './SparkLineComponents';

const LeftSection = () => {
    const { themeColors } = useContext(MenusContext);

    return (
        <div className={`text-capitalize content-colors shadow ${styles.data_box_1}`}>
            <div className="mb-3">
                <h6 className="text-center">
                    revenue updates
                </h6>
            </div>
            <div className="d-flex flex-column align-items-center">
                <div className={`mb-4`}>
                    <h5>${Number(93451).toLocaleString()}
                        <span
                            style={{ backgroundColor: themeColors.hex }}
                            className={`${styles.percent_btn}`}
                        >
                            14%
                        </span>
                    </h5>
                    <span style={{ fontSize: 12, color: "var(--bs-gray-600)" }}>
                        budget
                    </span>
                </div>
                <div className={`mb-1`}>
                    <h5>${Number(48485).toLocaleString()}</h5>
                    <span style={{ fontSize: 12, color: "var(--bs-gray-600)" }}>
                        expense
                    </span>
                </div>
                <SparkLineComponents />
                <div className="mt-4">
                    <Button
                        color={themeColors.name}
                        variant={"contained"}
                    >
                        download report
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default LeftSection;