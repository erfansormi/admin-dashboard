import React, { useContext, useState } from 'react'

// context
import { MenusContext } from '../../../../../Context/MenusContextProvider';

// mui
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

// data
import { CartData } from './CartData';

// components
import RightBtnsContent from '../RightBtnsContent';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const Cart = () => {
  const { navBtnIsClicked, handleCloseNavBtns,themeColors } = useContext(MenusContext);
  
  const toggleDrawer = (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      handleCloseNavBtns();
    };

  return (
    <>
      <Drawer
        anchor={"right"}
        open={navBtnIsClicked.cart}
        onClose={toggleDrawer("right", false)}
      >
        <RightBtnsContent title='shopping cart' style={{ width: 350,height:"100%" }}>
          {CartData.map((item, index) =>
            <div key={index * 36} className="align-center border-b">
              <div style={{ marginRight: 15 }}>
                <img src={item.img} alt={item.name} style={{ width: 80, objectFit: "cover", borderRadius: 6 }} />
              </div>
              <div className="d-flex" style={{ flexDirection: "column" }}>
                <div style={{ marginBottom: 8 }}>
                  <h5 style={{ fontSize: "1rem" }}>
                    {item.name}
                  </h5>
                </div>
                <div className="neutral-color" style={{ marginBottom: 8 }}>
                  {item.category}
                </div>
                <div className='align-center'>
                  <div style={{ marginRight: 5, fontWeight: 600 }}>
                    ${item.price}
                  </div>
                  <div>
                    <ButtonGroup variant="text" aria-label="outlined button group">
                      <Button color="error">-</Button>
                      <Button>{item.total}</Button>
                      <Button color="success">+</Button>
                    </ButtonGroup>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="justify-between fw-bold">
            <div>
              total price
            </div>
            <div>
              $890
            </div>
          </div>
          <div>
            <Button variant="contained" color={themeColors.name} sx={{width:"100%"}} size="large">
              place to orders
            </Button>
          </div>
        </RightBtnsContent>
      </Drawer>
    </>
  )
}
export default Cart
