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

const MorePlayerInfo = ({ playerStat, stats }) => {
  const classes = useStyles();

  const morePlayerInfo = [
    createData('Jersey', playerStat.jerseyNumber),
    createData('Status', playerStat.currentRosterStatus),
    createData('Born', playerStat.birthDate),
    createData('College', playerStat.college),
    createData('Games Started', stats.miscellaneous.gamesStarted)
  ];
  return (
    <Grid item>
      <TableContainer
        className={classes.playerDemographicTable}
        component={Paper}
      >
        <Table size='small' aria-label='simple'>
          <TableBody>
            {morePlayerInfo.map((p) => (
              <TableRow key={p.name}>
                <TableCell component='th'>{p.name}</TableCell>
                <TableCell component='th'>{p.info}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};

export default MorePlayerInfo;
