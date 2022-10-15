import React from 'react'
import { Route, Routes } from 'react-router-dom';

//context
import MenusContextProvider from './Context/MenusContextProvider';

//components
import Dashboard from './Components/Dashboard';

const App = () => {
    return (
        <MenusContextProvider>
            <Routes>
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='*' element={<Dashboard />} />
            </Routes>
        </MenusContextProvider>
    )
}

export default App