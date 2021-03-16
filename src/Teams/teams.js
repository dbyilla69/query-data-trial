import Paper from '@material-ui/core/Paper';
import RingLoader from 'react-spinners/RingLoader';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from 'react-query';
import TeamPlayer from './team-player';
import Header from './team-header';
import axios from 'axios';

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

const username = '8d5243ad-bd42-48dc-860b-3b58af';
const password = 'MYSPORTSFEEDS';
// const api = `https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-2020-regular/player_stats_totals.json?team=${team}&limit=20`;
const header = {
  headers: {
    Authorization: 'Basic ' + btoa(username + ':' + password)
  }
};

// const fetchTeams = (key, team) => {
//   console.log('url trial', team);
//   const result = axios
//     .get(api, header)
//     .then((res) => res.data.playerStatsTotals);
//   return result;
// };
const Teams = ({ team }) => {
  const classes = useStyles();
  //HAVE THE FUNCTION INLINE!!!!!
  // const queryInfo = useQuery('team', () =>
  //   axios.get(api, header).then((res) => res.data.playerStatsTotals)
  // );
  // const api = `https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-2020-regular/player_stats_totals.json?team=${team}&limit=20`;

  const { isLoading, data } = useQuery(['team', team], () =>
    axios
      .get(
        `https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-2020-regular/player_stats_totals.json?team=${team}&limit=20`,
        header
      )
      .then((res) => res.data.playerStatsTotals)
  );

  if (isLoading) return <RingLoader size={150} color={'#033369'} />;
  // if (error) throw error;

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
