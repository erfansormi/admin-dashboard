//icons
import GroupIcon from '@mui/icons-material/Group';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';

//colors
export const lightBlue300 = "#dff9fb"
export const cyan500 = "#48dbfb"
export const orange500 = "#ffa502"
export const white = "#fff"
export const red200 = "#fa9085"
export const red500 = "#EA2027"
export const lightGreen300 = "#d6ffb8"
export const green300 = "#78e08f"

//ecommerce
export const ecommerce = [
    {
        title: "customers",
        count: 39454,
        icon: <GroupIcon />,
        percentOfChange: "+2",
        color: cyan500,
        background: lightBlue300
    },
    {
        title: "products",
        count: 4348,
        icon: <ViewInArOutlinedIcon />,
        percentOfChange: "+17",
        color: white,
        background: orange500
    },
    {
        title: "sales",
        count: 42351,
        icon: <StackedBarChartOutlinedIcon />,
        percentOfChange: "+12",
        color: red500,
        background: red200
    },
    {
        title: "refunds",
        count: 3109,
        icon: <AutorenewOutlinedIcon />,
        percentOfChange: "-8",
        color: green300,
        background: lightGreen300
    },
]

//order

export const orderGrid = [
    {
        headerText: "Image",
        textAlign: "Center",
        width: "120",
    },
    {
        headerText: "Item",
        field: "OrderItems",
        textAlign: "Center",
        width: "150",
        editType: "dropdownedit"
    },
    {
        headerText: "CustomerName",
        field: "Customer Name",
        textAlign: "Center",
        width: "150",
    },
    {
        headerText: "Total Amount",
        field: "TotalAmount",
        format: "C2",
        textAlign: "Center",
        width: "150",
        editType: "numericedit"
    },
]