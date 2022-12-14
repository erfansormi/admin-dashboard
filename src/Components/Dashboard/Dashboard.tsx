import { Navigate, Route, Routes } from "react-router-dom";

// mui
import { Container } from "@mui/material";

//css
import styles from "./Dashboard.module.css";

//components
import Setting from "./Setting";
import SideBar from "../SideBar/SideBar";
import NavbarBtns from "../Navbar/NavbarBtns";
import Footer from "./Footer";
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
import Financial from "../Pages/Charts/Financial/Financial";
import ColorMapping from "../Pages/Charts/ColorMapping/ColorMapping";
import Pyramid from "../Pages/Charts/Pyramid/Pyramid";
import Stacked from "../Pages/Charts/Stacked/Stacked";

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
            <Container maxWidth="lg" className={`${styles.container}`}>
                <Routes>
                    <Route path="/" element={<Navigate to="/ecommerce" replace />} />
                    <Route path="/ecommerce" element={<Ecommerce />} />
                    <Route path="/orders" element={<Order />} />
                    <Route path="/employees" element={<Employees />} />
                    <Route path='/customers' element={<Customers />} />
                    <Route path='/calendar' element={<Calendar />} />
                    <Route path='/kanban' element={<Kanban />} />
                    <Route path='/editor' element={<TextEditor />} />
                    <Route path='/color-picker' element={<ColorPicker />} />
                    <Route path='/line' element={<Line />} />
                    <Route path='/area' element={<Area />} />
                    <Route path='/bar' element={<Bar />} />
                    <Route path='/pie' element={<Pie />} />
                    <Route path="/financial" element={<Financial />} />
                    <Route path="/color-mapping" element={<ColorMapping />} />
                    <Route path="/pyramid" element={<Pyramid />} />
                    <Route path="/stacked" element={<Stacked />} />
                </Routes>
                <Footer />
            </Container>
        </>
    );
};

export default Dashboard;
