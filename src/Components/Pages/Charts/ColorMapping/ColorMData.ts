export const colorMappingData = [
    [
        { x: 'Jan', y: 6.96 },
        { x: 'Feb', y: 8.9 },
        { x: 'Mar', y: 12 },
        { x: 'Apr', y: 17.5 },
        { x: 'May', y: 22.1 },
        { x: 'June', y: 25 },
        { x: 'July', y: 29.4 },
        { x: 'Aug', y: 29.6 },
        { x: 'Sep', y: 25.8 },
        { x: 'Oct', y: 21.1 },
        { x: 'Nov', y: 15.5 },
        { x: 'Dec', y: 9.9 },
    ],

];

interface RangeColorMapping {
    label: string,
    start: number | undefined,
    end: number | undefined,
    colors: string[] | undefined
}

export const rangeColorMapping: RangeColorMapping[] = [
    {
        label: '1°C to 10°C',
        start: 1,
        end: 10,
        colors: ["#FFFF99"]
    },

    {
        label: '11°C to 20°C',
        start: 11,
        end: 20,
        colors: ["#FFA500"]
    },

    {
        label: '21°C to 30°C',
        start: 21,
        end: 30,
        colors: ['#FF4040']
    },
];