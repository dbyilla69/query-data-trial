import { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { teamOptions } from './teamNames';

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

      const handleChange = (event) => {
    setTeam(event.target.value);
  };
    return (       <FormControl variant='outlined' className={classes.formControl}>
        <InputLabel id='demo-simple-select-outlined-label'>Team</InputLabel>
        <TeamSelect
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
        </TeamSelect>
      </FormControl> );
}
 
export default TeamSelect;