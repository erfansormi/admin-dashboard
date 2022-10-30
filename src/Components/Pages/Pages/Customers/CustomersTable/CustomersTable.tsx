import React from 'react';
import {
    Box,
    Table,
    TableContainer,
    Paper,
} from "@mui/material";

// data
import { Order, Data, rowCustomers } from '../CustomersData';

// css
import styles from './customersTable.module.css'

// components
import CustomersTB from './CustomersTB';
import CustomersTh from './CustomersTh';
import CustomersTableToolbar from './CustomersTableToolbar';
import CustomersTPagination from './CustomersTPagination';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const CustomersTable = () => {
    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] = React.useState<keyof Data>("name");
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // functions
    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rowCustomers.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data
    ) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    return (
        <Box sx={{ width: "100%" }} className={`${styles.container} content-colors`}>
            <Paper sx={{ width: "100%", mb: 2, color: 'inherit', backgroundColor: "inherit" }}>
                <CustomersTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={"medium"}
                    >
                        <CustomersTh
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rowCustomers.length}
                        />
                        <CustomersTB
                            page={page}
                            rowsPerPage={rowsPerPage}
                            selected={selected}
                            setSelected={setSelected}
                            order={order}
                            orderBy={orderBy}
                        />
                    </Table>
                    <CustomersTPagination
                        rowsPerPage={rowsPerPage}
                        setRowsPerPage={setRowsPerPage}
                        page={page}
                        setPage={setPage}
                    />
                </TableContainer>
            </Paper>
        </Box>
    )
}

export default CustomersTable;