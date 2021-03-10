import { Fragment, useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import RingLoader from 'react-spinners/RingLoader';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import { makeStyles } from '@material-ui/core/styles';
import { teamOptions } from './teamNames';
import { useQuery } from 'react-query';
import  TeamPlayer  from './team-player';
import Header from './team-header';

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

const fetchTeams = async () => {
//   const res = await fetch('http://swapi.dev/api/planets/');
//   return res.json();
    //   const apiUrl = `https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-2020-regular/player_stats_totals.json?team=was`;
    //    const res= await fetch(apiUrl, {
        //   headers: {
        //     Authorization: 'Basic ' + btoa(username + ':' + password)
        //   }
    //     }); return res.json();
    const result = await fetch(`https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-2020-regular/player_stats_totals.json?team=was&limit=20`, {headers: {
            Authorization: 'Basic ' + btoa(username + ':' + password)
          }})
    return result.json()
    
    }
        

const Teams = () => {
  const classes = useStyles();
  const initialTeamState = 'ari';
  const [team, setTeam] = useState(initialTeamState);

    const { data, status } = useQuery('teams', fetchTeams);
  console.log('status', status);
  console.log('data', data);

//   if (loading) return <RingLoader size={150} color={'#033369'} />;
//   if (error) throw error;

  const handleChange = (event) => {
    setTeam(event.target.value);
  };

  return (
    <Fragment>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='demo-simple-select-outlined-label'>Team</InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          value={team}
          onChange={handleChange}
          label='Age'
        >
          {teamOptions.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size='small'
          aria-label='a dense table'
        >
 <Header/>
          <TableBody>
            {status==='success'&&data.playerStatsTotals.map(({ player }) =><TeamPlayer key={player.id} player={player}/>)}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default Teams;
