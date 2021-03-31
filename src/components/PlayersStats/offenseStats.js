import PlayersStats from './players-stats';

export const columns = [
  {
    field: 'rushAtt',
    headerName: 'Rush Att',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120
  },
  {
    field: 'rushYds',
    headerName: 'Rush Yards',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120
  },
  {
    field: 'rushAvg',
    headerName: 'Rush Avg',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120
  },
  {
    field: 'lngRush',
    headerName: 'Long Rush',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120
  },
  {
    field: 'rushTd',
    headerName: 'Rush TD',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120
  },
  {
    field: 'rush1stDowns',
    headerName: '1st Down Rushes',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120
  },
  {
    field: 'rush20Plus',
    headerName: '20 yards Runs',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120
  },
  {
    field: 'targets',
    headerName: 'Rec Target',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120
  },
  {
    field: 'rec',
    headerName: 'Rec',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120
  },
  {
    field: 'recYds',
    headerName: 'Rec Yds',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120
  },
  {
    field: 'recAvg',
    headerName: 'Rec Avg',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120
  },
  {
    field: 'recLng',
    headerName: 'Rec Lng',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120
  },
  {
    field: 'recTd',
    headerName: 'Rec Td',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120
  },
  {
    field: 'Recfum',
    headerName: 'Fum',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 120
  }
];

// export const rows = (stats) => [
//   { id: 1, fumForced: 0, fumLost: stats.fumLost }
//   //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
// ];
// console.log('stats', stats.fumLost);

// export const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.getValue('firstName') || ''} ${
//         params.getValue('lastName') || ''
//       }`
//   }
// ];

export const offensivePlayerData = (stats) => [
  {
    // id: playerStat?.id,
    id: 1,
    rushAtt: stats?.rushing?.rushAttempts,
    rushYds: stats?.rushing?.rushYards,
    rushAvg: `${stats?.rushing?.rushAverage}.0` ?? 'No Stats',
    lngRush: stats?.rushing?.rushLng,
    rushTd: stats?.rushing?.rushTD,
    rush1stDowns: stats?.rushing?.rush1stDowns,
    rush20Plus: stats?.rushing?.rush20Plus,
    rec: stats?.receiving?.receptions,
    recTd: stats?.receiving?.recTD,
    recAvg: stats?.receiving?.recAverage,
    recLng: stats?.receiving?.recLng,
    Recfum: stats?.receiving?.recFumbles,
    recYds: stats?.receiving?.recYards,
    targets: stats?.receiving?.targets
  }
];

export const obData = (stats) => [
  {
    // id: playerStat?.id,
    id: 1,
    rushAtt: stats?.rushing?.rushAttempts,
    rushYds: stats?.rushing?.rushYards,
    rushAvg: `${stats?.rushing?.rushAverage}.0` ?? 'No Stats',
    lngRush: stats?.rushing?.rushLng,
    rushTd: stats?.rushing?.rushTD,
    rush1stDowns: stats?.rushing?.rush1stDowns,
    rush20Plus: stats?.rushing?.rush20Plus,
    rec: stats?.receiving?.receptions,
    recTd: stats?.receiving?.recTD,
    recAvg: stats?.receiving?.recAverage,
    recLng: stats?.receiving?.recLng,
    Recfum: stats?.receiving?.recFumbles,
    recYds: stats?.receiving?.recYards,
    targets: stats?.receiving?.targets
  }
];
