import PersonIcon from '@mui/icons-material/Person';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

export const profileData = [
    {
        title: "my profile",
        des: "account setting",
        icon: <PersonIcon />,
        color: "cyan"
    },
    {
        title: "my inbox",
        des: "messages & emails",
        icon: <AllInboxIcon />,
        color: "success"
    },
    {
        title: "my task",
        des: "To-do and Daily Tasks",
        icon: <FormatListBulletedIcon />,
        color: "warning"
    },
]