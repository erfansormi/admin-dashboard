//icons
import GroupIcon from '@mui/icons-material/Group';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';

//colors
export const lightBlue300 = "var(--light-cyan)"
export const cyan500 = "var(--cyan-500)"
export const orange500 = "var(--orange-500)"
export const white = "#fff"
export const red200 = "var(--light-red)"
export const red500 = "var(--error-color-2)"
export const lightGreen300 = "var(--light-green)"
export const green300 = "var(--green-300)"

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