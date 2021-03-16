import Paper from '@material-ui/core/Paper';
import RingLoader from 'react-spinners/RingLoader';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import { makeStyles } from '@material-ui/core/styles';
import TeamPlayer from './team-player';
import Header from './team-header';
import useTeam from '../../hooks/useTeam';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Teams = ({ team }) => {
  const classes = useStyles();
  const { data, error, isLoading } = useTeam(team);

  if (isLoading) return <RingLoader size={150} color={'#033369'} />;
  if (error) throw error;

  return (
    <>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size='small'
          aria-label='a dense table'
          team={team}
          onChange={(event) => team.onChange(event.target.value)}
        >
          <Header />
          <TableBody>
            {data?.map(({ player }) => (
              <TeamPlayer key={player.id} player={player} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Teams;
