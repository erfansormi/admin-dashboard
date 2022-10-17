//mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

//css
import styles from "./Order.module.css"

// data
import { orderRowsData } from './orderGridData';

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead sx={{ border: "1px solid #eee" }}>
                    <TableRow className={styles.table_title_contaner}>
                        <TableCell align="left">image</TableCell>
                        <TableCell align="center">item</TableCell>
                        <TableCell align="center">current name</TableCell>
                        <TableCell align="center">total ammount</TableCell>
                        <TableCell align="center">status</TableCell>
                        <TableCell align="center">order ID</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={styles.row_container}>
                    {orderRowsData.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align='left'>
                                <img src={row.image} alt="order-pic" className={styles.order_img} />
                            </TableCell>
                            <TableCell align="center">
                                {row.name}
                            </TableCell>
                            <TableCell align="center">{row.currentName}</TableCell>
                            <TableCell align="center">${row.ammount}</TableCell>
                            <TableCell align="center">
                                <Button
                                    variant="contained"
                                    color={row.color}
                                    className={``}
                                >
                                    {row.status}
                                </Button>
                            </TableCell>
                            <TableCell align="center">{row.orderid}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}
