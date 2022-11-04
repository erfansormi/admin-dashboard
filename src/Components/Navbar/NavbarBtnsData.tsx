//components
import Chat from "./RightBtns/Components/Chat/Chat";
import Cart from "./RightBtns/Components/Cart/Cart";
import Notification from "./RightBtns/Components/Notification/Notification";
import Profile from "./RightBtns/Components/Profile/Profile";

// icons
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

// ts
import { KeyInitialValue } from '../../Context/MenusContextProvider';

interface iNavbarBtnsData {
    icon: JSX.Element;
    component: JSX.Element;
    link: KeyInitialValue;
    id: number;
}

// data
export const NavbarBtnsData: iNavbarBtnsData[] = [
    {
        icon: <ShoppingCartOutlinedIcon />,
        link: "cart",
        id: 101,
        component: <Cart />
    },
    {
        icon: <ChatBubbleOutlineOutlinedIcon />,
        link: "chats",
        id: 102,
        component: <Chat />
    },
    {
        icon: <NotificationsNoneOutlinedIcon />,
        link: "notification",
        id: 103,
        component: <Notification />
    },
    {
        icon: <AccountCircleOutlinedIcon />,
        link: "profile",
        id: 104,
        component: <Profile />
    },
]
