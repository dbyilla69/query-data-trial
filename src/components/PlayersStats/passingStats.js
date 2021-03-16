import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { createData } from '../../util';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  accordion: { width: '25%' },
  accordionDetails: { display: 'block' }
});

const PassingStats = ({ stats, primaryTeamColor, secondaryTeamColor }) => {
  const classes = useStyles();

  const passingStats = [
    createData('Pass 20 Plus:', stats.passing?.pass20Plus),
    createData('Pass 40 Plus:', stats.passing?.pass40Plus),
    createData('Pass Attempts:', stats.passing?.passAttempts),
    createData('Pass Average:', stats.passing?.passAvg),
    createData('Pass Completions:', stats.passing?.passCompletions),
    createData('Pass Int:', stats.passing?.passInt),
    createData('Pass Int Pct:', stats.passing?.passIntPct),
    createData('Pass Lng:', stats.passing?.passLng),
    createData('Pass Pct:', stats.passing?.passPct),
    createData('Pass Sack Yards: ', stats.passing?.passSackY),
    createData('Pass Sacks:', stats.passing?.passSacks),
    createData('Pass TD:', stats.passing?.passTD),
    createData('Pass TD Pct:', stats.passing?.passTDPct),
    createData('Pass Yards:', stats.passing?.passYards),
    createData('Pass Yards Per Att: ', stats.passing?.passYardsPerAtt),
    createData('Qb Rating:', stats.passing?.qbRating)
  ];
  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon style={{ color: `${secondaryTeamColor}` }} />
        }
        aria-controls='panel1a-content'
        id='panel1a-header'
        style={{ backgroundColor: `${primaryTeamColor}` }}
      >
        <Typography
          style={{
            color: `${secondaryTeamColor}`
          }}
          variant='h5'
        >
          Passing Stats
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {passingStats.map((p) => (
          <List dense key={p.name}>
            <ListItemText primary={p.name} />
            <ListItemSecondaryAction>{p.info}</ListItemSecondaryAction>
          </List>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default PassingStats;
