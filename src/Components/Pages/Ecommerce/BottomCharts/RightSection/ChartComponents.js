import * as React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Inject, Category, Tooltip } from '@syncfusion/ej2-react-charts';

class ChartComponents extends React.Component {
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