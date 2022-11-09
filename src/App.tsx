import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { SnackbarProvider } from 'notistack';

// mui
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Components/Mui/CustomizeColor';

//context
import MenusContextProvider from './Context/MenusContextProvider';

//components
import Dashboard from './Components/Dashboard/Dashboard';
import GlobalStyles from './Components/Emotion/GlobalStyles';
import LibrarisStyles from './Components/Emotion/LibrarisStyle';

const App = () => {
    return (
        <MenusContextProvider>
            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={3}>
                    <GlobalStyles />
                    <LibrarisStyles />
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='*' element={<Dashboard />} />
                    </Routes>
                </SnackbarProvider>
            </ThemeProvider>
        </MenusContextProvider>
    )
}

export default App