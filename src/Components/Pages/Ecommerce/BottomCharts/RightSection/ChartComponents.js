import * as React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Inject, Legend, Category, Tooltip, DataLabel, StackingColumnSeries } from '@syncfusion/ej2-react-charts';

const stackedChartData = [
    [
        { x: "Jan", y: 111.1 },
        { x: "Feb", y: 127.3 },
        { x: "Mar", y: 143.4 },
        { x: "Apr", y: 156.1 },
        { x: "May", y: 164.1 },
        { x: "Jun", y: 162.1 },
        { x: "July", y: 169.1 },
    ],
    [
        { x: "Jan", y: 211.1 },
        { x: "Feb", y: 227.3 },
        { x: "Mar", y: 243.4 },
        { x: "Apr", y: 256.1 },
        { x: "May", y: 264.1 },
        { x: "Jun", y: 262.1 },
        { x: "July", y: 269.1 },
    ],
]

const stackedCustomSeries = [
    {
        dataSource: stackedChartData[0],
        xName: "x",
        YName: "y",
        name: "Budget",
        type: 'StackingColumn',
        background: "blue"
    },
    {
        dataSource: stackedChartData[1],
        xName: "x",
        YName: "y",
        name: "Expense",
        type: 'StackingColumn',
        background: "red"
    },
]

class ChartComponents extends React.Component {
    // constructor() {
    //     super(...arguments);
    //     this.primaryxAxis = { interval: 1, valueType: 'Category' };
    //     this.primaryyAxis = {
    //         minimum: 0, maximum: 400, interval: 100,
    //         labelFormat: '{value}'
    //     };
    // }
    // render() {
    //     return <ChartComponent
    //         id='charts' legendSettings={{ background: "white" }}
    //         primaryXAxis={this.primaryxAxis}
    //         primaryYAxis={this.primaryyAxis}
    //         title='Mobile Game Market by Country'
    //         width="85%"
    //         height="400px"
    //         tooltip={{ enable: true }}
    //         chartArea={{ border: { width: 0 } }}
    //     >

    //         <Inject services={[StackingColumnSeries, Legend, Tooltip, Category]} />

    //         <SeriesCollectionDirective>
    //             {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
    //         </SeriesCollectionDirective>
    //     </ChartComponent>;
    // }
    constructor() {
        super(...arguments);
        this.data = [
            { month: 'Jan', sales: 135 }, { month: 'Feb', sales: null },
            { month: 'Mar', sales: 134 }, { month: 'Apr', sales: 132 },
            { month: 'May', sales: null }, { month: 'Jun', sales: 189 },
            { month: 'Jul', sales: 135 }, { month: 'Aug', sales: null },
            { month: 'Sep', sales: 138 }, { month: 'Oct', sales: 130 },
            { month: 'Nov', sales: 125 }, { month: 'Dec', sales: 102 }
        ];
        this.primaryxAxis = { valueType: 'Category' };
        this.emptyPointSettings1 = { mode: 'Average', fill: '#48dbfb' };
    }
    render() {
        return (<ChartComponent id='charts' primaryXAxis={this.primaryxAxis} tooltip={{ enable: true }} height="320px">
            <Inject services={[ColumnSeries, Category, Tooltip]} />
            <SeriesCollectionDirective>
                <SeriesDirective  dataSource={this.data} xName='month' type='Column' yName='sales' name='Sales' emptyPointSettings={this.emptyPointSettings1} />
            </SeriesCollectionDirective>
        </ChartComponent>);
    }
}
;
export default ChartComponents