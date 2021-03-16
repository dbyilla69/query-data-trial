import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { teamOptions } from '../components/Teams/teamNames';
import Select from '@material-ui/core/Select';
import Teams from '../components/Teams/teams';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

const TeamSelect = () => {
  const classes = useStyles();
  const initialTeamState = 'ari';
  const [team, setTeam] = useState(initialTeamState);

  return (
    <>
      <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='demo-simple-select-outlined-label'>Team</InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          value={team}
          onChange={(event) => setTeam(event.target.value)}
          label='Age'
        >
          {teamOptions.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Teams team={team} />
    </>
  );
};

export default TeamSelect;
