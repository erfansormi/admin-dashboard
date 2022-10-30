import { useContext } from "react";

// context
import { MenusContext } from "../../../../../Context/MenusContextProvider";

import { alpha } from "@mui/material/styles";
import {
    Toolbar,
    Typography,
    IconButton,
    Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useSnackbar } from 'notistack';

interface CustomersTableToolbarProps {
    numSelected: number;
}

function CustomersTableToolbar({ numSelected }: CustomersTableToolbarProps) {
    const { enqueueSnackbar } = useSnackbar();
    const { themeColors } = useContext(MenusContext);

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(
                            theme.palette.primary.main,
                            theme.palette.action.activatedOpacity
                        ),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: "1 1 100%" }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: "1 1 100%" }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Customers List
                </Typography>
            )}
            {numSelected > 0 ? (
                <Tooltip
                    onClick={() => enqueueSnackbar(`This website not have backend!`, { variant: "error" })}
                    title="Delete">
                    <IconButton color={themeColors.name}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton color={themeColors.name}>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}

export default CustomersTableToolbar;