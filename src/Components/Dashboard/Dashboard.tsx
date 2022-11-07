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
import Order from "../Pages/Pages/Order/Order";
import Employees from "../Pages/Pages/Employees/Employees";
import Customers from "../Pages/Pages/Customers/Customers";
import Calendar from "../Pages/Apps/Calendar/Calendar";
import Kanban from "../Pages/Apps/Kanban/Kanban";
import TextEditor from "../Pages/Apps/Editor/TextEditor"
import ColorPicker from "../Pages/Apps/Color-Picker/ColorPicker";
import Line from "../Pages/Charts/Line/Line";
import Area from "../Pages/Charts/Area/Area";
import Bar from "../Pages/Charts/Bar/Bar";
import Pie from "../Pages/Charts/Pie/Pie";

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
                        <Route path='/pie' element={<Pie />} />
                        <Route path='/bar' element={<Bar />} />
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
