import React from 'react'
import { Scheduler } from "@aldabil/react-scheduler";

// mui
import { Paper } from '@mui/material';

// data
import { CalendarData } from './CalendarData';

const Schedule = () => {
    return (
        <div className="content-colors">
            <Paper sx={{ padding: 3, color: "inherit", backgroundColor: "inherit" }}>
                <Scheduler
                    view="month"
                    events={CalendarData.map(item => {
                        return {
                            event_id: item.Id,
                            title: item.Subject,
                            start: new Date(item.StartTime),
                            end: new Date(item.EndTime),
                            color: item.CategoryColor
                        }
                    })}
                    selectedDate={new Date("2022-10-10T04:00:00.000Z")}
                />
            </Paper>
        </div>
    )
}

export default Schedule