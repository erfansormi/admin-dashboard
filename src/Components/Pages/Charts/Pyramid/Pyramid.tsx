import { useContext } from "react";
import { MenusContext } from "../../../../Context/MenusContextProvider";

import {
    AccumulationChartComponent,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    Inject,
    AccumulationLegend,
    PyramidSeries,
    AccumulationTooltip,
    Tooltip,
    AccumulationDataLabel,
} from "@syncfusion/ej2-react-charts";

// components
import TitlePage from "../../TitlePage/TitlePage";

// data
import { PyramidData } from "./PyramidData";

const Pyramid = () => {
    const { themeMode } = useContext(MenusContext);

    return (
        <div>
            <TitlePage title="pyramid" category="chart" />
            <div className="shadow content-colors content-padding">
                <AccumulationChartComponent
                    background={themeMode === 'dark' ? '#333' : '#fff'}
                    legendSettings={{ background: 'white', margin: { top: 15, bottom: 15 } }}
                    tooltip={{ enable: true }}
                    style={{ overflow: "hidden" }}
                >
                    <Inject
                        services={[
                            AccumulationLegend,
                            PyramidSeries,
                            AccumulationTooltip,
                            AccumulationDataLabel,
                            Tooltip
                        ]}
                    />
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective
                            dataSource={PyramidData}
                            xName="x"
                            yName="y"
                            type="Pyramid"
                            explode={true}
                            explodeOffset="10"
                            explodeAll={false}
                            dataLabel={{ visible: true, name: "text" }}
                            width={window.innerWidth > 500 ? "450px" : "98%"}
                        ></AccumulationSeriesDirective>
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
            </div>
        </div>
    );
};

export default Pyramid;
