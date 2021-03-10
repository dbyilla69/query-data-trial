import { Fragment, useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import RingLoader from 'react-spinners/RingLoader';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { teamOptions } from './teamNames';
import useAxios from '../hooks/useAxios';

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

const Teams = () => {
  const classes = useStyles();
  const initialTeamState = 'ari';
  const [team, setTeam] = useState(initialTeamState);

  const { data, loading, error } = useAxios(
    `/2019-2020-regular/player_stats_totals.json?team=${team}&limit=20`
    // `/players.json?team=${team}&rosterstatus=assigned-to-roster&limit=5`
  );

  if (loading) return <RingLoader size={150} color={'#033369'} />;
  if (error) throw error;

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
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Players</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Height</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>BirthDate</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>College</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.playerStatsTotals.map(({ player }) => {
              const {
                id,
                firstName,
                lastName,
                jerseyNumber,
                primaryPosition,
                height,
                weight,
                birthDate,
                age,
                college
              } = player;
              return (
                <TableRow key={id}>
                  <TableCell>{jerseyNumber}</TableCell>
                  <TableCell>
                    <NavLink color='primary' to={`/playerStats/${id}`}>
                      {firstName} {lastName}
                    </NavLink>
                  </TableCell>
                  <TableCell>{primaryPosition}</TableCell>
                  <TableCell>{height}</TableCell>
                  <TableCell>{weight}</TableCell>
                  <TableCell>{birthDate}</TableCell>
                  <TableCell>{age}</TableCell>
                  <TableCell>{college}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default Teams;
