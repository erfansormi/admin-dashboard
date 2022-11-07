import { useContext } from 'react';
import { MenusContext } from '../../../../Context/MenusContextProvider';

import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

// data
import { barCustomSeries } from './BarData';

// components
import TitlePage from '../../TitlePage/TitlePage';

const Bar = () => {
    const { themeMode } = useContext(MenusContext);

    return (
        <div>
            <TitlePage category="chart" title="bar" />
            <div className="shadow content-colors content-padding justify-center">
                <ChartComponent
                    background={themeMode === 'dark' ? '#333' : '#fff'}
                    className='justify-center w-100'
                    id="charts"
                    primaryXAxis={{
                        valueType: 'Category',
                        interval: 1,
                        majorGridLines: { width: 0 },
                    }}
                    primaryYAxis={{
                        majorGridLines: { width: 0 },
                        majorTickLines: { width: 0 },
                        lineStyle: { width: 0 },
                        labelStyle: { color: 'transparent' },
                    }}
                    chartArea={{ border: { width: 0 } }}
                    tooltip={{ enable: true }}
                    legendSettings={{ background: 'white', position: "Top" }}
                    height='450px'
                    style={{ maxWidth: 1050 }}
                >
                    <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
                    <SeriesCollectionDirective>
                        {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};

export default Bar;