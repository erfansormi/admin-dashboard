import { useContext } from 'react'

// context
import { MenusContext } from '../../../Context/MenusContextProvider'

// components
import TitlePage from '../TitlePage/TitlePage'

import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective,
    Inject, LineSeries, DateTime, Legend, Tooltip
} from '@syncfusion/ej2-react-charts'

// data
import { lineCustomSeries } from './LineData'

const Line = () => {
    const { themeMode } = useContext(MenusContext);

    return (
        <div>
            <TitlePage title='inflation rate' category='chart' />
            <div className="shadow content-colors d-flex justify-content-center" style={{ padding: "40px 0" }}>
                <ChartComponent
                    width='100%'
                    style={{ maxWidth: 750 }}
                    tooltip={{ enable: true }}
                    primaryXAxis={{
                        valueType: 'DateTime', intervalType: 'Years', lineStyle: { width: 0 },
                        labelFormat: 'y',
                        edgeLabelPlacement: 'Shift',
                        majorGridLines: { width: 0 },
                        labelStyle: { color: themeMode === "light" ? "#111" : "#fff" }
                    }}
                    primaryYAxis={{
                        labelFormat: '{value}%', minimum: 0, maximum: 100,
                        interval: 20,
                        majorGridLines: { color: themeMode === "light" ? "#ccc" : "#666" },
                        labelStyle: { color: themeMode === "light" ? "#111" : "#fff" }
                    }}
                    legendSettings={{ textStyle: { color: themeMode === "light" ? "#111" : "#fff" } }}
                >
                    <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
                    <SeriesCollectionDirective>
                        {lineCustomSeries.map((item, index) =>
                            <SeriesDirective key={index * 33} {...item} summaryFillColor="#fff" />
                        )}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    )
}

export default Line