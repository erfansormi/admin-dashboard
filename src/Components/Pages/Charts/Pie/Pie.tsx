import { useContext } from 'react'

// context
import { MenusContext } from '../../../../Context/MenusContextProvider';

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';


// components
import TitlePage from '../../TitlePage/TitlePage';

const Pie = () => {
    const { themeMode } = useContext(MenusContext);

    const pieChartData = [
        { x: 'Labour', y: 18, text: '18%' },
        { x: 'Legal', y: 8, text: '8%' },
        { x: 'Production', y: 15, text: '15%' },
        { x: 'License', y: 11, text: '11%' },
        { x: 'Facilities', y: 18, text: '18%' },
        { x: 'Taxes', y: 14, text: '14%' },
        { x: 'Insurance', y: 16, text: '16%' },
    ];

    return (
        <div>
            <TitlePage category='chart' title='pie' />
            <div className="shadow content-colors content-padding">
                <AccumulationChartComponent
                    legendSettings={{ visible: true, background: 'white' }}
                    height={"full"}
                    background={themeMode === 'dark' ? '#333' : '#fff'}
                    tooltip={{ enable: true }}
                >
                    <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective
                            name="Sale"
                            dataSource={pieChartData}
                            xName="x"
                            yName="y"
                            innerRadius="40%"
                            startAngle={0}
                            endAngle={360}
                            radius="70%"
                            explode
                            explodeOffset="10%"
                            explodeIndex={2}
                            dataLabel={{
                                visible: true,
                                name: 'text',
                                position: 'Inside',
                                font: {
                                    fontWeight: '600',
                                    color: '#fff',
                                },
                            }}
                        />
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
            </div>
        </div>
    )
}

export default Pie;