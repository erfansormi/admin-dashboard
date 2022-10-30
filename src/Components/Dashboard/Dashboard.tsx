import { Navigate, Route, Routes } from "react-router-dom";

// mui
import { Container } from "@mui/material";

//css
import styles from "./Dashboard.module.css";

//components
import Setting from "./Setting";
import SideBar from "../SideBar/SideBar";
import NavbarBtns from "../Navbar/NavbarBtns";
import Ecommerce from "../Pages/Ecommerce/Ecommerce";
import Order from "../Pages/Order/Order";
import Employees from "../Pages/Employees/Employees";
import Customers from "../Pages/Customers/Customers";
import Calendar from "../Pages/Calendar/Calendar";
import Kanban from "../Pages/Kanban/Kanban";
import TextEditor from "../Pages/Editor/TextEditor"
import ColorPicker from "../Pages/Color-Picker/ColorPicker";
import Line from "../Pages/Line/Line";
import Area from "../Pages/Area/Area";

const Dashboard = () => {
    return (
        <>
            {/* sidebar */}
            <SideBar />

            {/* navbar btns */}
            <NavbarBtns />

            {/* setting */}
            <Setting />

            {/* center content */}
            <Container maxWidth="xl" className={`${styles.container}`}>
                <div style={{ padding: 40 }}>
                    <Routes>
                        <Route path='/area' element={<Area />} />
                        <Route path='/line' element={<Line />} />
                        <Route path='/color-picker' element={<ColorPicker />} />
                        <Route path='/editor' element={<TextEditor />} />
                        <Route path='/kanban' element={<Kanban />} />
                        <Route path='/calendar' element={<Calendar />} />
                        <Route path='/customers' element={<Customers />} />
                        <Route path="/employees" element={<Employees />} />
                        <Route path="/orders" element={<Order />} />
                        <Route path="/ecommerce" element={<Ecommerce />} />
                        <Route path="/" element={<Navigate to="/ecommerce" replace />} />
                    </Routes>
                </div>
            </Container>
        </>
    );
};

export default Dashboard;
