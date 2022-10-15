import React from 'react'

//data
import { ecommerce } from "../../Data/PagesData"

//css
import styles from "./Ecommerce.module.css"

//mui
import IconButton from '@mui/material/IconButton';

//components
import EcommerceRevenue from './EcommerceRevenue';

const Ecommerce = () => {
    return (
        <div className={`${styles.container}`}>
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
                    <button className='btn'>
                        download
                    </button>
                </div>
            </div>
            <div className={`row justify-content-center`}>
                {ecommerce.map((item, index) =>
                    <div key={index} className={`col-5 col-md-2 ${styles.ecommerce_data_box}`}>
                        <div>
                            <IconButton sx={{ backgroundColor: item.background, color: item.color }}
                                onMouseOver={(e) => e.target.style.background = item.background}
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
            <div>
                <EcommerceRevenue />
            </div>
        </div>
    );
}

export default Ecommerce