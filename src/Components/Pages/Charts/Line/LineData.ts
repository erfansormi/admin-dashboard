export const lineChartData = [
    [
      { x: new Date(2005, 0, 1), y: 21 },
      { x: new Date(2006, 0, 1), y: 24 },
      { x: new Date(2007, 0, 1), y: 36 },
      { x: new Date(2008, 0, 1), y: 38 },
      { x: new Date(2009, 0, 1), y: 54 },
      { x: new Date(2010, 0, 1), y: 57 },
      { x: new Date(2011, 0, 1), y: 70 },
    ],
    [
      { x: new Date(2005, 0, 1), y: 28 },
      { x: new Date(2006, 0, 1), y: 44 },
      { x: new Date(2007, 0, 1), y: 48 },
      { x: new Date(2008, 0, 1), y: 50 },
      { x: new Date(2009, 0, 1), y: 66 },
      { x: new Date(2010, 0, 1), y: 78 },
      { x: new Date(2011, 0, 1), y: 84 },
    ],
  
    [
      { x: new Date(2005, 0, 1), y: 10 },
      { x: new Date(2006, 0, 1), y: 20 },
      { x: new Date(2007, 0, 1), y: 30 },
      { x: new Date(2008, 0, 1), y: 39 },
      { x: new Date(2009, 0, 1), y: 50 },
      { x: new Date(2010, 0, 1), y: 70 },
      { x: new Date(2011, 0, 1), y: 100 },
    ],
  ];

export const lineCustomSeries = [
    { dataSource: lineChartData[0],
      xName: 'x',
      yName: 'y',
      name: 'Germany',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
    { dataSource: lineChartData[1],
      xName: 'x',
      yName: 'y',
      name: 'England',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line',
      fill:"#64748B"
    },
    { dataSource: lineChartData[2],
      xName: 'x',
      yName: 'y',
      name: 'India',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  ];