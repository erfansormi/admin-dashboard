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
        <TableContainer sx={{color:"inherit" , backgroundColor:"inherit"}} className='shadow' component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" className='content-colors'>
                <TableHead>
                    <TableRow className={`content-colors-1 ${styles.table_title_contaner}`}>
                        <TableCell className={"border-b"} align="left">image</TableCell>
                        <TableCell className={"border-b"} align="center">item</TableCell>
                        <TableCell className={"border-b"} align="center">current name</TableCell>
                        <TableCell className={"border-b"} align="center">total ammount</TableCell>
                        <TableCell className={"border-b"} align="center">status</TableCell>
                        <TableCell className={"border-b"} align="center">order ID</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={styles.row_container}>
                    {orderRowsData.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell className={"border-b"} component="th" scope="row" align='left'>
                                <img src={row.image} alt="order-pic" className={styles.order_img} />
                            </TableCell>
                            <TableCell className={"border-b"} align="center">
                                {row.name}
                            </TableCell>
                            <TableCell className={"border-b"} align="center">{row.currentName}</TableCell>
                            <TableCell className={"border-b"} align="center">${row.ammount}</TableCell>
                            <TableCell className={"border-b"} align="center">
                                <Button
                                    variant="contained"
                                    color={row.color}
                                    className={``}
                                >
                                    {row.status}
                                </Button>
                            </TableCell>
                            <TableCell className={"border-b"} align="center">{row.orderid}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}
