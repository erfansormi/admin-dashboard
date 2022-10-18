import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

// ts
import { KeyInitialValue } from '../../Context/MenusContextProvider';

interface iNavbarBtnsData {
    icon: JSX.Element;
    link: KeyInitialValue;
    id: number;
}

// data
export const NavbarBtnsData: iNavbarBtnsData[] = [
    {
        icon: <ShoppingCartOutlinedIcon />,
        link: "cart",
        id: 101
    },
    {
        icon: <ChatBubbleOutlineOutlinedIcon />,
        link: "chats",
        id: 102
    },
    {
        icon: <NotificationsNoneOutlinedIcon />,
        link: "notification",
        id: 103
    },
    {
        icon: <AccountCircleOutlinedIcon />,
        link: "profile",
        id: 104
    },
]
