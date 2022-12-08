import { useContext } from "react"

// context
import { MenusContext } from "../../../../../Context/MenusContextProvider"

// mui
import { Avatar, Button } from "@mui/material"

// css
import styles from "./profile.module.css"

// data
import { profileData } from "./profileData"

// components
import RightBtnsContent from "../RightBtnsContent"

const Profile = () => {
    const { themeColors } = useContext(MenusContext);

    return (
        <RightBtnsContent title="user profile">
            <div className={`border-b align-center overflow-hidden p-2 ${styles.avatar_container}`}>
                <div>
                    <Avatar
                        alt="Cindy Baker"
                        src="https://mui.com/static/images/avatar/2.jpg"
                        sx={{ width: 60, height: 60 }} />
                </div>
                <div>
                    <div>
                        <h5>cindy baker</h5>
                    </div>
                    <div className="neutral-color">
                        administrator
                    </div>
                    <div className="neutral-color" style={{ fontWeight: 600 }}>
                        info@shop.com
                    </div>
                </div>
            </div>
            {profileData.map((item, index) =>
                <div
                    key={index * 43}
                    className={`hover-list align-center p-2 border-b pointer ${styles.profile_list}`}
                >
                    <div>
                        <Button
                            color={item.color as "cyan" | "success" | "warning"}
                            variant="contained"
                            sx={{ width: 40, height: 40, borderRadius: "8px", minWidth: "unset" }}
                        >
                            {item.icon}
                        </Button>
                    </div>
                    <div>
                        <div>
                            <h5>
                                {item.title}
                            </h5>
                        </div>
                        <div className="neutral-color">
                            {item.des}
                        </div>
                    </div>
                </div>
            )}
            <div>
                <Button variant="contained" color={themeColors.name} sx={{ width: "100%" }} size={"large"}>
                    logout
                </Button>
            </div>
        </RightBtnsContent>
    )
}

export default Profile