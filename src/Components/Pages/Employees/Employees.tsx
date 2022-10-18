import { useState } from "react";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TitlePage from '../TitlePage/TitlePage';
import { TextField, Avatar } from '@mui/material';

// icons
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// css
import styles from "./employees.module.css"

// data
import { rowEmployees, colEmployees } from './employeesData';

const Employees = () => {
    const [searchValue, setSearchValue] = useState("")
    const filteredEmployees = rowEmployees.filter(item => item.employeeName.includes(searchValue))

    return (
        <>
            <TitlePage title='employees' category="page" />
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 550, textTransform: "capitalize" }}>
                    <div
                        style={{ backgroundColor: "var(--light-cyan)" }}
                        className={styles.search_container}
                    >
                        <TextField
                            sx={{ minWidth: "50%" }}
                            label="Search employees..."
                            variant="filled"
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            spellCheck={false}
                        />
                    </div>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {colEmployees.map((item, index) => (
                                    <TableCell
                                        key={item.colText}
                                        align={index == 0 ? "left" : "center"}
                                        sx={{ fontWeight: "600", backgroundColor: "var(--light-cyan)" }}
                                    >
                                        {item.colText}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredEmployees.map((row) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    <TableCell align={"left"}>
                                        <div className={styles.icon_container} style={{ justifyContent: "start" }}>
                                            <Avatar
                                                alt={row.employeeName}
                                                src={row.img}
                                                sx={{ width: 34, height: 34, marginRight: 2 }}
                                            />
                                            {row.employeeName}
                                        </div>
                                    </TableCell>
                                    <TableCell align={"center"}>
                                        {row.occupation}
                                    </TableCell>
                                    <TableCell align={"center"}>
                                        <div className={styles.icon_container}>
                                            <span>
                                                <LocationCityIcon />
                                            </span>
                                            {row.city}
                                        </div>
                                    </TableCell>
                                    <TableCell align={"center"}>
                                        <div className={styles.icon_container}>
                                            <span className={styles.country_icon}>
                                                <LocationOnIcon />
                                            </span>
                                            {row.country}
                                        </div>
                                    </TableCell>
                                    <TableCell align={"center"}>
                                        {row.hireDate.toLocaleDateString()}
                                    </TableCell>
                                    <TableCell align={"center"}>
                                        {row.reportsTo}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </>
    )
}

export default Employees