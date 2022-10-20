import React from "react";
import { Route, Routes } from "react-router-dom";

//icons
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

//css
import styles from "./Dashboard.module.css";

//components
import SideBar from "../SideBar/SideBar";
import NavbarBtns from "../Navbar/NavbarBtns";
import Ecommerce from "../Pages/Ecommerce/Ecommerce";
import Order from "../Pages/Order/Order";
import Employees from "../Pages/Employees/Employees";
import Customers from "../Pages/Customers/Customers";

const Dashboard = () => {
    return (
        <>
            {/* sidebar */}
            <SideBar />

            {/* navbar btns */}
            <NavbarBtns />

            {/* setting */}
            <button className={`btn btn-lg btn-primary ${styles.setting_btn}`}>
                <SettingsOutlinedIcon />
            </button>

            {/* center content */}
            <div className={`container ${styles.container}`}>
                <Routes>
                    <Route path='/customers' element={<Customers />} />
                    <Route path="/ecommerce" element={<Ecommerce />} />
                    <Route path="/orders" element={<Order />} />
                    <Route path="/employees" element={<Employees />} />
                </Routes>
            </div>
        </>
    );
};

export default Dashboard;
