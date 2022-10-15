import FactCheckIconOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ViewKanbanOutlinedIcon from '@mui/icons-material/ViewKanbanOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import CandlestickChartOutlinedIcon from '@mui/icons-material/CandlestickChartOutlined';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import StackedBarChartOutlinedIcon from '@mui/icons-material/StackedBarChartOutlined';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';

export const sideBarData = [
    {
        title: "dashboard",
        id: 1,
        link: [
            {
                id: 10,
                name: "ecommerce",
                icon: <FactCheckIconOutlinedIcon fontSize='large' />
            }
        ]
    },
    {
        title: "pages",
        id: 2,
        link: [
            {
                id: 20,
                name: "orders",
                icon: <ShoppingCartOutlinedIcon fontSize='large' />
            },
            {
                id: 21,
                name: "employees",
                icon: <GroupIcon fontSize='large' />
            },
            {
                id: 22,
                name: "customers",
                icon: <AccountCircleOutlinedIcon fontSize='large' />
            }
        ]
    }, {
        title: "apps",
        id: 3,
        link: [
            {
                id: 30,
                name: "calendar",
                icon: <CalendarTodayOutlinedIcon fontSize='large' />
            },
            {
                id: 31,
                name: "kanban",
                icon: <ViewKanbanOutlinedIcon fontSize='large' />
            },
            {
                id: 32,
                name: "editor",
                icon: <ModeEditOutlinedIcon fontSize='large' />
            },
            {
                id: 33,
                name: "color-picker",
                icon: <PaletteOutlinedIcon fontSize='large' />
            }
        ]
    }, {
        title: "charts",
        id: 4,
        link: [
            {
                id: 41,
                name: "line",
                icon: <ShowChartOutlinedIcon fontSize='large' />
            },
            {
                id: 42,
                name: "area",
                icon: <InsertChartRoundedIcon fontSize='large' />
            },
            {
                id: 43,
                name: "bar",
                icon: <InsertChartOutlinedIcon fontSize='large' />
            },
            {
                id: 44,
                name: "pie",
                icon: <PieChartOutlineOutlinedIcon fontSize='large' />
            },
            {
                id: 45,
                name: "financial",
                icon: <CandlestickChartOutlinedIcon fontSize='large' />
            },
            {
                id: 46,
                name: "color-mapping",
                icon: <BubbleChartOutlinedIcon fontSize='large' />
            },
            {
                id: 47,
                name: "pyramid",
                icon: <ChangeHistoryIcon fontSize='large' />
            },
            {
                id: 48,
                name: "stacked",
                icon: <StackedBarChartOutlinedIcon fontSize='large' />
            },
        ]
    }
]