import { useState, useContext } from "react";

// context
import { MenusContext } from "../../../../Context/MenusContextProvider";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TitlePage from '../../TitlePage/TitlePage';
import { TextField } from '@mui/material';

// css
import styles from "./employees.module.css"

// data
import { rowEmployees, colEmployees, rowEmployeesValues } from './employeesData';

const Employees = () => {
    const { themeColors } = useContext(MenusContext);

    const [searchValue, setSearchValue] = useState("");
    const filteredEmployees = rowEmployees.filter(item =>
        item.employeeName.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.occupation.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.city.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.country.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
        <>
            <TitlePage title='employees' category="page" />
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer className='content-colors' sx={{ maxHeight: 560, textTransform: "capitalize" }}>
                    <div
                        style={{ backgroundColor: themeColors.hex }}
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
                                        sx={{ fontWeight: "600", backgroundColor: themeColors.hex, color: "#fff !important" }}
                                    >
                                        {item.colText}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody className='content-colors'>
                            {filteredEmployees.map((row) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    {
                                        rowEmployeesValues(row).map((item, index) =>
                                            <TableCell
                                                align={"left"}
                                                key={index * 30}
                                                className='border-b'
                                                style={{ color: "inherit" }}
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