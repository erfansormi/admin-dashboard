import React from "react";
import { Route, Routes } from "react-router-dom";

// mui
import { Container } from "@mui/material";

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
import Calendar from "../Pages/Calendar/Calendar";
import Kanban from "../Pages/Kanban/Kanban";
import TextEditor from "../Pages/Editor/TextEditor"

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
            <Container maxWidth="xl" className={`${styles.container}`}>
                <div style={{ backgroundColor: "var(--light-color-1)", padding: 40 }}>
                    <Routes>
                        <Route path='/editor' element={<TextEditor />} />
                        <Route path='/kanban' element={<Kanban />} />
                        <Route path='/calendar' element={<Calendar />} />
                        <Route path='/customers' element={<Customers />} />
                        <Route path="/employees" element={<Employees />} />
                        <Route path="/orders" element={<Order />} />
                        <Route path="/ecommerce" element={<Ecommerce />} />
                    </Routes>
                </div>
            </Container>
        </>
    );
};

export default Dashboard;
