import { useState } from "react";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TitlePage from '../TitlePage/TitlePage';
import { TextField } from '@mui/material';

// css
import styles from "./employees.module.css"

// data
import { rowEmployees, colEmployees, rowEmployeesValues } from './employeesData';

const Employees = () => {
    const [searchValue, setSearchValue] = useState("")
    const filteredEmployees = rowEmployees.filter(item => item.employeeName.includes(searchValue))

    return (
        <>
            <TitlePage title='employees' category="page" />
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 560, textTransform: "capitalize" }}>
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
                                        align={"left"}
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
                                    {
                                        rowEmployeesValues(row).map((item, index) =>
                                            <TableCell
                                                align={"left"}
                                                key={index * 30}
                                            >
                                                {item.value}
                                            </TableCell>
                                        )
                                    }
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