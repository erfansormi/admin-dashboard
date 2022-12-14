import React from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";

// data
import { kanbanData, kanbanGrid } from './KanbanData';

// components
import TitlePage from '../../TitlePage/TitlePage'

const Kanban = () => {
    return (
        <>
            {/* <TitlePage category='app' title='kanban' /> */}
            <div
                id="kanban"
                style={{
                    padding: "20px 0 0",
                    borderRadius: 6,
                    position: "absolute",
                    left: "20px",
                    right: "20px",
                    top: "45px",
                }}
            >
                <TitlePage category='app' title='kanban' />
                <KanbanComponent
                    id="kanban"
                    keyField="Status"
                    dataSource={kanbanData}
                    cardSettings={{ contentField: "Summary", headerField: "Id" }}
                >
                    <ColumnsDirective>
                        {
                            kanbanGrid.map((item, index) =>
                                <ColumnDirective
                                    {...item}
                                    key={index * 500}
                                />
                            )
                        }
                    </ColumnsDirective>
                </KanbanComponent>
            </div>
        </>
    )
}

export default Kanban