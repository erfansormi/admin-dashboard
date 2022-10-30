export const barChartData = [
    [
        { x: 'USA', y: 46 },
        { x: 'GBR', y: 27 },
        { x: 'CHN', y: 26 },
    ],
    [
        { x: 'USA', y: 37 },
        { x: 'GBR', y: 23 },
        { x: 'CHN', y: 18 },
    ],
    [
        { x: 'USA', y: 38 },
        { x: 'GBR', y: 17 },
        { x: 'CHN', y: 26 },
    ],
];

export const barCustomSeries = [
    {
        dataSource: barChartData[0],
        xName: 'x',
        yName: 'y',
        name: 'Gold',
        type: 'Column',
        marker: {
            dataLabel: {
                visible: true,
                position: 'Top',
            },
        },
        fill:"gold"
    },
    {
        dataSource: barChartData[1],
        xName: 'x',
        yName: 'y',
        name: 'Silver',
        type: 'Column',
        marker: {
            dataLabel: {
                visible: true,
                position: 'Top',
            },
        },
        fill:"silver"
    },
    {
        dataSource: barChartData[2],
        xName: 'x',
        yName: 'y',
        name: 'Bronze',
        type: 'Column',
        marker: {
            dataLabel: {
                visible: true,
                position: 'Top',
            },
        },
        fill:"#CD7F32"
    },
];