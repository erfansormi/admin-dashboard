import React from 'react'
import TitlePage from '../TitlePage/TitlePage'
import Schedule from './Schedule'

const Calendar = () => {
    return (
        <div>
            <TitlePage category='app' title='calendar' />
            <Schedule />
        </div>
    )
}

export default Calendar