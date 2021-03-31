import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@material-ui/data-grid';
import { columns, offensivePlayerData } from './offenseStats';
// const columns = [
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

// const rows =  stats;

export default function PlayersStats({ stats, playerStat }) {
  console.log('see data', stats);

  return (
    <>
      {(playerStat.primaryPosition === 'RB' ||
        playerStat.primaryPosition === 'WR' ||
        playerStat.primaryPosition === 'TE') && (
        <Paper
          elevation={1}
          style={{ height: 400, width: '100%', marginTop: '29px' }}
        >
          <DataGrid rows={offensivePlayerData(stats)} columns={columns} />{' '}
        </Paper>
      )}
    </>
  );
}
