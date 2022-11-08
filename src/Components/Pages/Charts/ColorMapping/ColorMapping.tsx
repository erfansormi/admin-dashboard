import { useContext } from 'react'
import { MenusContext } from '../../../../Context/MenusContextProvider';

// ej2
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';

// data
import { colorMappingData, rangeColorMapping } from "./ColorMData"

// components
import TitlePage from '../../TitlePage/TitlePage';

const ColorMapping = () => {
    const { themeMode } = useContext(MenusContext);

    return (
        <div>
            <TitlePage category='chart' title='color mapping' />
            <div className="shadow content-colors content-padding">
                <ChartComponent
                    primaryXAxis={{
                        valueType: 'Category',
                        majorGridLines: { width: 0 },
                        title: 'Months',
                        labelStyle: { color: themeMode === "dark" ? "#fff" : "#111" },
                        titleStyle:{ color: themeMode === "dark" ? "#fff" : "#111" }
                    }}
                    primaryYAxis={{
                        lineStyle: { width: 0 },
                        majorTickLines: { width: 0 },
                        minorTickLines: { width: 0 },
                        labelFormat: '{value}°C',
                        title: 'Temperature',
                        labelStyle: { color: themeMode === "dark" ? "#fff" : "#111" },
                        titleStyle:{ color: themeMode === "dark" ? "#fff" : "#111" }
                    }}
                    chartArea={{ border: { width: 0 } }}
                    legendSettings={{ mode: 'Range', background: 'white', margin: { top: 15, bottom: 15 } }}
                    tooltip={{ enable: true }}
                    background={themeMode === 'dark' ? '#333' : '#fff'}
                >
                    <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={colorMappingData[0]}
                            name="USA"
                            xName="x"
                            yName="y"
                            type="Column"
                            cornerRadius={{
                                topLeft: 10,
                                topRight: 10,
                            }}
                        />
                    </SeriesCollectionDirective>
                    <RangeColorSettingsDirective>
                        {rangeColorMapping.map((item, index) =>
                            <RangeColorSettingDirective
                                key={index * 53}
                                start={item.start}
                                end={item.end}
                                colors={item.colors}
                                label={item.label}
                            />
                        )}
                    </RangeColorSettingsDirective>
                </ChartComponent>
            </div>
        </div>
    )
}

export default ColorMapping;