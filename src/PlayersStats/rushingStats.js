import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { createData } from '../util';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  accordion: { width: '25%' },
  accordionDetails: { display: 'block' }
});

const RushingStats = ({ stats, primaryTeamColor, secondaryTeamColor }) => {
  const classes = useStyles();

  const rushingStats = [
    createData('Rush 1st Downs:', stats.rushing?.rush1stDowns),
    createData('Rush 1st Downs Pct:', stats.rushing?.rush1stDownsPct),
    createData('Rush 20 Plus:', stats.rushing?.rush20Plus),
    createData('Rush 40 Plus:', stats.rushing?.rush40Plus),
    createData('Rush Attempts:', stats.rushing?.rushAttempts),
    createData('Rush Average:', stats.rushing?.rushAverage),
    createData('Rush Fumbles:', stats.rushing?.rushFumbles),
    createData('Rush Lng: ', stats.rushing?.rushLng),
    createData('Rush TD:', stats.rushing?.rushTD),
    createData('Rush Yards:', stats.rushing?.rushYards)
  ];

  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon style={{ color: `${secondaryTeamColor}` }} />
        }
        aria-controls='panel2a-content'
        id='panel2a-header'
        style={{ backgroundColor: `${primaryTeamColor}` }}
      >
        <Typography
          style={{
            color: `${secondaryTeamColor}`
          }}
          variant='h5'
        >
          Rushing Stats
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {rushingStats.map((p) => (
          <List dense key={p.name}>
            <ListItemText primary={p.name} />
            <ListItemSecondaryAction>{p.info}</ListItemSecondaryAction>
          </List>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default RushingStats;
