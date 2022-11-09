import { useContext } from "react";
import { MenusContext } from "../../../../../Context/MenusContextProvider";

//chart
import {
    SparklineComponent,
    Inject,
    SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLineComponents = () => {
    const { themeColors } = useContext(MenusContext);

    return (
        <SparklineComponent
            border={{ width: 2 }}
            id="sparkline"
            height="100px"
            width="80%"
            valueType="Numeric"
            lineWidth={1.5}
            tooltipSettings={{
                visible: true,
                format: "${xval} :data ${yval}",
            }}
            dataSource={[
                { x: 0, xval: "1", yval: 0 },
                { x: 1, xval: "2", yval: 2 },
                { x: 2, xval: "3", yval: 2 },
                { x: 3, xval: "4", yval: 4 },
                { x: 4, xval: "5", yval: 2 },
                { x: 5, xval: "6", yval: 7 },
            ]}
            xName="xval"
            yName="yval"
            type="Line"
            fill={themeColors.hex}
        >
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
    );
};

export default SparkLineComponents;
