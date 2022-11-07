import { useContext } from "react";

// context
import { MenusContext } from "../../../../Context/MenusContextProvider";

import {
    AxisModel,
    ChartComponent,
    SeriesCollectionDirective,
    SeriesDirective,
    Inject,
    LegendSettingsModel,
    HiloSeries,
    Category,
    Tooltip,
    Zoom,
    Crosshair,
    DateTime,
} from "@syncfusion/ej2-react-charts";

//data
import { financialChartData } from "./FinancialData";

// components
import TitlePage from "../../TitlePage/TitlePage";

const Financial = () => {
    const { themeMode, themeColors } = useContext(MenusContext);

    const primaryxAxis: AxisModel = {
        valueType: 'DateTime',
        minimum: new Date('2016, 12, 31'),
        maximum: new Date('2017, 9, 30'),
        crosshairTooltip: { enable: true },
        majorGridLines: { width: 0 },
        labelStyle: { color: themeMode === "light" ? "#111" : "#fff" },
        titleStyle: { color: themeMode === "light" ? "#111" : "#fff" },
    };
    const primaryyAxis: AxisModel = {
        minimum: 100,
        maximum: 180,
        interval: 20,
        title: "Price",
        labelStyle: { color: themeMode === "light" ? "#111" : "#fff" },
        titleStyle: { color: themeMode === "light" ? "#111" : "#fff" },
        labelFormat:"${value}"
    };
    const style: any = { textAlign: "center" };
    const legendSettings: LegendSettingsModel = {
        visible: false,
        background: "white",
        margin: { top: 15 },
    };

    return (
        <div>
            <TitlePage category="chart" title="financial" />
            <div className="shadow content-colors content-padding">
                <ChartComponent
                    style={style}
                    primaryXAxis={primaryxAxis}
                    primaryYAxis={primaryyAxis}
                    legendSettings={legendSettings}
                    title="APPLE Historical"
                    background={themeMode === "dark" ? "#333" : "#fff"}
                    titleStyle={{ color: themeMode === "light" ? "#111" : "#fff" }}
                    tooltip={{ enable: true, shared: true }}
                    crosshair={{ enable: true, lineType: 'Vertical', line: { width: 0 } }}
                >
                    <Inject services={[HiloSeries, Tooltip, Category, Crosshair, Zoom, DateTime]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={financialChartData}
                            xName="x"
                            yName="low"
                            name="India"
                            type="Hilo"
                            low="low"
                            high="high"
                            fill={themeColors.hex}
                        ></SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};
export default Financial;
