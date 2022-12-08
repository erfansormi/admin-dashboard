import { useContext } from 'react'

// context
import { MenusContext } from '../../../../../Context/MenusContextProvider';

// data
import { ChatData } from './ChatData';

// mui
import { Avatar, Button } from '@mui/material';

// css
import styles from "./chat.module.css";

// components
import RightBtnsContent from '../RightBtnsContent';

const Chat = () => {
  const { themeColors } = useContext(MenusContext);

  return (
    <RightBtnsContent title="messages">
      {ChatData.map((item, index) =>
        <div
          key={index * 10}
          className={`border-b hover-list pointer d-flex flex-column p-2`}
        >
          <div className='align-center'>
            <div style={{ marginRight: 15 }}>
              <Avatar alt={item.name} src={item.img} />
            </div>
            <div className={`w-100 overflow-hidden d-flex flex-column`}>
              <div className="justify-between">
                <div>
                  <h4>
                    {item.name}
                  </h4>
                </div>
                <div className="neutral-color" style={{ fontSize: "0.8rem" }}>
                  {item.time}
                </div>
              </div>
              <p className={`${styles.text} neutral-color triple-dot`}>
                {item.message}
              </p>
            </div>
          </div>
        </div>
      )
      }
      <div>
        <Button variant="contained" sx={{ width: "100%" }} color={themeColors.name} size="large">
          show all messages
        </Button>
      </div>
    </RightBtnsContent >
  )
}

export default Chat