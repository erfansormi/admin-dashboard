import { useContext } from 'react'

// context
import { MenusContext } from '../../../../../Context/MenusContextProvider'

// data
import { NotifData } from './NotifData'

// mui
import { Avatar, Button } from '@mui/material'

// components
import RightBtnsContent from '../RightBtnsContent'

const Notification = () => {
  const { themeColors } = useContext(MenusContext);

  return (
    <RightBtnsContent title="notifications">
      {NotifData.map((item, index) =>
        <div key={index * 47} className={`align-center border-b hover-list pointer`}>
          <div style={{ marginRight: 15 }}>
            <Avatar src={item.img} alt="notification" />
          </div>
          <div>
            <div>
              <h5>
                {item.title}
              </h5>
            </div>
            <div className='neutral-color' style={{ fontSize: "0.9 rem" }}>
              {item.des}
            </div>
          </div>
        </div>
      )}
      <div>
        <Button sx={{ width: "100%" }} color={themeColors.name} variant="contained" size={"large"}>
          show all notifications
        </Button>
      </div>
    </RightBtnsContent>
  )
}

export default Notification