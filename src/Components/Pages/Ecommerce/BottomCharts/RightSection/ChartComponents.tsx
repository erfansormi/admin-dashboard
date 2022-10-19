import {
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    ColumnSeries,
    Inject,
    Category,
    Tooltip,
} from "@syncfusion/ej2-react-charts";

const ChartComponents = () => {
    const data = [
        { month: "Jan", sales: 135 },
        { month: "Feb", sales: null },
        { month: "Mar", sales: 134 },
        { month: "Apr", sales: 132 },
        { month: "May", sales: null },
        { month: "Jun", sales: 189 },
        { month: "Jul", sales: 135 },
        { month: "Aug", sales: null },
        { month: "Sep", sales: 138 },
        { month: "Oct", sales: 130 },
        { month: "Nov", sales: 125 },
        { month: "Dec", sales: 102 },
    ];

    return (
        <ChartComponent
            id="charts"
            primaryXAxis={{ valueType: "Category" }}
            tooltip={{ enable: true }}
            height="320px"
        >
            <Inject services={[ColumnSeries, Category, Tooltip]} />
            <SeriesCollectionDirective>
                <SeriesDirective
                    dataSource={data}
                    xName="month"
                    type="Column"
                    yName="sales"
                    name="Sales"
                    emptyPointSettings={{ mode: "Average", fill: "#48dbfb" }}
                />
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};
export default ChartComponents;
