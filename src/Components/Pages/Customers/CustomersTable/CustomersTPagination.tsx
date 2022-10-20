import React from 'react'

// mui
import { TablePagination } from "@mui/material";

// data
import { rowCustomers } from "../CustomersData"

// ts
interface Props {
    rowsPerPage: number;
    setRowsPerPage: React.Dispatch<React.SetStateAction<number>>,
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const CustomersTPagination = ({ page, setPage, rowsPerPage, setRowsPerPage }: Props) => {

    // functions
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TablePagination
            rowsPerPageOptions={[10, 15, rowCustomers.length]}
            component="div"
            count={rowCustomers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}

export default CustomersTPagination