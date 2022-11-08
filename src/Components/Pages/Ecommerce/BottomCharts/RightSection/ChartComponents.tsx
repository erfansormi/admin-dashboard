import { useContext } from "react";

// context
import { MenusContext } from "../../../../../Context/MenusContextProvider";

import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    StackingColumnSeries,
    Inject,
    Category,
    Tooltip,
    Legend
} from "@syncfusion/ej2-react-charts";

// data
import { budget, expense } from "./ChartData";

interface Props {
    height?: string
}

const ExpenseChart = ({ height }: Props) => {
    const { themeMode } = useContext(MenusContext);

    return (
        <ChartComponent
            id="charts"
            primaryXAxis={{
                valueType: "Category", labelStyle: {
                    color: themeMode === "light" ? "#111" : "#fff"
                }
            }}
            tooltip={{ enable: true }}
            height={height ? height : "320px"}
            primaryYAxis={{
                labelStyle: { color: themeMode === "light" ? "#111" : "#fff" },
                interval: 100,
            }}
            legendSettings={{ background: 'white', position: "Top", margin: { bottom: 10 } }}
            background={themeMode === 'dark' ? '#333' : '#fff'}
        >
            <Inject services={[StackingColumnSeries, Category, Tooltip, Legend]} />
            <SeriesCollectionDirective>
                <SeriesDirective
                    dataSource={budget}
                    xName="month"
                    type="StackingColumn"
                    yName="budget"
                    name="Budget"
                />
                <SeriesDirective
                    dataSource={expense}
                    xName="month"
                    type="StackingColumn"
                    yName="expense"
                    name="Expense"
                    fill={themeMode === "light" ? "#666" : "#eee"}
                />
            </SeriesCollectionDirective>
        </ChartComponent >
    );
};
export default ExpenseChart;
