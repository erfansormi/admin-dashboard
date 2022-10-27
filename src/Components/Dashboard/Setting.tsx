import { useContext, useState } from "react";

// mui
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from "@mui/material";

// context
import { MenusContext } from "../../Context/MenusContextProvider";

//icons
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

// data
import { themeColorsData } from "./settingData";

//css
import styles from "./Dashboard.module.css";

// ts
import { ThemeColors } from "../../Context/MenusContextProvider";

const Setting = () => {
    const { setActiveSetting, activeSetting, themeMode, setThemeMode, themeColors, setThemeColors } = useContext(MenusContext);
    const toggleDrawer = (open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === 'keydown' &&
                ((event as React.KeyboardEvent).key === 'Tab' ||
                    (event as React.KeyboardEvent).key === 'Shift')
            ) {
                return;
            }

            setActiveSetting(open);
        };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setThemeMode((event.target as HTMLInputElement).value as "light" | "dark");
    };

    return (
        <>
            <Button
                color={themeColors.name}
                className={styles.setting_btn}
                variant="contained"
                onClick={toggleDrawer(true)}
                sx={{ minWidth: "auto" }}
            >
                <SettingsOutlinedIcon />
            </Button>
            <Drawer
                anchor={"right"}
                open={activeSetting}
                onClose={toggleDrawer(false)}
            >
                <Box
                    className={styles.setting_container}
                    sx={{ width: 300 }}
                    role="presentation"
                    onKeyDown={toggleDrawer(false)}
                    onClick={toggleDrawer(false)}
                >
                    <div>
                        <h5>
                            setting
                        </h5>
                    </div>
                    <div className={styles.theme_options}>
                        <div>
                            <h5>
                                theme options
                            </h5>
                        </div>
                        <div>
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-controlled-radio-buttons-group"
                                    name="controlled-radio-buttons-group"
                                    value={themeMode}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="light" control={<Radio />} label="Light" />
                                    <FormControlLabel value="dark" control={<Radio />} label="Dark" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h5>
                                theme colors
                            </h5>
                        </div>
                        <div className="d-flex">
                            {themeColorsData.map((item, index) =>
                                <Button
                                    key={index * 21}
                                    color={item.name as ThemeColors}
                                    variant={"contained"}
                                    sx={{ minWidth: "auto", marginRight: "8px" }}
                                    className={styles.theme_colors}
                                    onClick={() => 
                                        setThemeColors({
                                            name: item.name as ThemeColors,
                                            hex: item.hex as string,
                                        })
                                    }
                                >
                                </Button>
                            )}
                        </div>
                    </div>
                </Box>
            </Drawer>
        </>
    )
}

export default Setting;