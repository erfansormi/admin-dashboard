import React from "react";
import { TableBody, TableCell, TableRow, Checkbox } from "@mui/material";

// data
import { rowCustomers, Order, Data, perRowCustomersT } from "../CustomersData";
import { stableSort, getComparator } from "./CustomersTable";

// ts
interface Props {
    page: number;
    rowsPerPage: number;
    selected: readonly string[];
    setSelected: React.Dispatch<React.SetStateAction<readonly string[]>>;
    order: Order;
    orderBy: keyof Data;
}

const CustomersTB = ({
    page,
    rowsPerPage,
    selected,
    setSelected,
    order,
    orderBy,
}: Props) => {
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowCustomers.length) : 0;

    // functions
    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: readonly string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    return (
        <TableBody>
            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                             rows.slice().sort(getComparator(order, orderBy)) */}
            {stableSort(rowCustomers, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                    const isItemSelected = isSelected(row.name);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                        <TableRow
                            hover
                            onClick={(event) => handleClick(event, row.name)}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.name}
                            selected={isItemSelected}
                            sx={{ textTransform: "capitalize" }}
                        >
                            <TableCell className='border-b' padding="checkbox">
                                <Checkbox
                                    color="primary"
                                    checked={isItemSelected}
                                    inputProps={{
                                        "aria-labelledby": labelId,
                                    }}
                                />
                            </TableCell>
                            {
                                perRowCustomersT(row).map((item, index) =>
                                    index == 0 ?
                                        <TableCell className='border-b' component="th" id={labelId} scope="row" padding="none">
                                            {item.value}
                                        </TableCell> :
                                        <TableCell className='border-b' align="left">
                                            {item.value}
                                        </TableCell>
                                )
                            }
                        </TableRow>
                    );
                })}
            {emptyRows > 0 && (
                <TableRow
                    style={{
                        height: 53 * emptyRows,
                    }}
                >
                    <TableCell colSpan={6} />
                </TableRow>
            )}
        </TableBody>
    );
};

export default CustomersTB;