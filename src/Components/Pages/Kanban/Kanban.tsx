import React from 'react'
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";

// data
import { kanbanData, kanbanGrid } from './KanbanData';

// components
import TitlePage from '../TitlePage/TitlePage'
import KanbanColumns from "./KanbanColumns"

const Kanban = () => {
    return (
        <>
            {/* <TitlePage category='app' title='kanban' /> */}
            <div
                id="kanban"
                style={{
                    padding: "20px 0 0",
                    borderRadius: 6,
                    background: "#fff",
                    position: "absolute",
                    left: "30px",
                    right: "30px",
                    top: "40px",
                }}
            >
                <TitlePage category='app' title='kanban' style={{ margin: "0 15px 30px" }} />
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