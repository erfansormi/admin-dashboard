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

function createData(name: string, image: string, currentName: string, ammount: number, status: string, orderid: number) {
    type Color = "success" | "error" | "primary" | "warning" | "neutral"
    let color: Color = "primary";
    switch (status) {
        case "complate":
            color = "success";
            break;

        case "canceled":
            color = "neutral";
            break;

        case "active":
            color = "primary";
            break;

        case "pending":
            color = "warning";
            break;

        case "rejected":
            color = "error";
            break;

        default:
            color = "primary";
    }
    return {
        name, image, currentName, ammount, status, orderid, color
    };
}

const rows = [
    createData('car toy', "https://p.globalsources.com/IMAGES/PDT/BIG/425/B1160415425.jpg", "david alonso", 109, "complate", 10546),
    createData('shoe', "https://m.media-amazon.com/images/I/81i057rz8gS._UL1500_.jpg", "flippe anderson", 37, "canceled", 10586),
    createData('glasess', "https://cdn.fleetfeet.com/products/goodr/Front-View-A-Gingers-Soul-OG-BK-BK1-copy.jpg/width:640-height:480-fit:trim/Front-View-A-Gingers-Soul-OG-BK-BK1-copy.jpg", "jack wilshere", 24, "active", 10646),
    createData('bag', "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/076620/02/fnd/IND/fmt/png/PUMA-Challenger-Small-Unisex-Duffel-Bag", "andrea gomez", 67, "pending", 10656),
    createData('chocolate', "https://m.media-amazon.com/images/I/61pj9OP0IQL._SX522_.jpg", 'selona rordi', 4, "rejected", 10668),
];

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
                    {rows.map((row) => (
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
