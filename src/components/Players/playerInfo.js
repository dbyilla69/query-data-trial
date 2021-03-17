import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import { makeStyles } from '@material-ui/core/styles';
import { createData } from '../../util';

const useStyles = makeStyles(() => ({
  playerDemographicTable: {
    width: '20em'
  }
}));

const PlayerInfo = ({ playerStat, stats }) => {
  const classes = useStyles();

  const playersInfo = [
    createData('Position', playerStat.primaryPosition),
    createData('Age', playerStat.age),
    createData('Height', playerStat.height),
    createData('Weight', playerStat.weight),
    createData('Games Played', stats.gamesPlayed)
  ];

  return (
    <Grid item>
      <TableContainer
        className={classes.playerDemographicTable}
        component={Paper}
      >
        <Table size='small' aria-label='simple table'>
          <TableBody>
            {playersInfo.map((p) => (
              <TableRow key={p.name}>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.info}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default PlayerInfo;
