import { useContext } from 'react'

//data
import { ecommerce } from "./EcommerceData"

// context
import { MenusContext } from "../../../Context/MenusContextProvider";

//css
import styles from "./Ecommerce.module.css"

//mui
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';

//components
import EcommerceRevenue from './BottomCharts/EcommerceRevenue';

const Ecommerce = () => {
    const { themeColors } = useContext(MenusContext)

    return (
        <div className={`${styles.container}`}>

            {/* top summary */}
            <div className={`${styles.img_container}`}>
                <div>
                    <h5>
                        earnings
                    </h5>
                    <span>
                        ${Number(63483).toLocaleString()}
                    </span>
                </div>
                <div>
                    <Button color={themeColors.name} variant={"contained"}>
                        download
                    </Button>
                </div>
            </div>

            {/* middle grid */}
            <div className={`row justify-content-center`}>
                {ecommerce.map((item, index) =>
                    <div key={index} className={`col-5 col-md-2 ${styles.ecommerce_data_box}`}>
                        <div>
                            <IconButton sx={{ backgroundColor: item.background, color: item.color }}
                                onMouseOver={(e: any) => e.target.style.background = item.background}
                                className={`${styles.btn_icon}`} size='large'>
                                {item.icon}
                            </IconButton>
                        </div>
                        <div className={`mt-2 ${styles.digits}`}>
                            <span>{item.count.toLocaleString()}</span>
                            <span className={item.percentOfChange.includes("+") ? "text-success"
                                : "text-danger"}>{item.percentOfChange}%</span>
                        </div>
                        <div className={`${styles.title_box}`}>
                            <span>
                                {item.title}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* bottom charts */}
            <div>
                <EcommerceRevenue />
            </div>
        </div>
    );
}

export default Ecommerce