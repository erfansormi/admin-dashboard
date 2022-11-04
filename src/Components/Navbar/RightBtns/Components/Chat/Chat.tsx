import { useContext } from 'react'

// context
import { MenusContext } from '../../../../../Context/MenusContextProvider';

// data
import { ChatData } from './ChatData';

// mui
import { Avatar, Button } from '@mui/material';

// components
import RightBtnsContent from '../RightBtnsContent';

const Chat = () => {
  const { themeColors } = useContext(MenusContext);

  return (
    <RightBtnsContent title="messages">
      {ChatData.map((item, index) =>
        <div
          key={index * 10}
          className={`border-b hover-list pointer`}
          style={{ flexDirection: "column" }}
        >
          <div className='align-center'>
            <div style={{ marginRight: 15 }}>
              <Avatar alt={item.name} src={item.img} />
            </div>
            <div className="d-flex" style={{ flexDirection: "column" }}>
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
              <p className="neutral-color triple-dot" style={{
                fontSize: "0.9rem",
                textTransform: "initial",
                width: 210
              }}>
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