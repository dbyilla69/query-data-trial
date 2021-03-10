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

const FumbleStats = ({ stats, primaryTeamColor, secondaryTeamColor }) => {
  const classes = useStyles();
  const {
    fumForced,
    fumLost,
    fumOppRec,
    fumOwnRec,
    fumRecYds,
    fumTD,
    fumTotalRec,
    fumbles
  } = stats.fumbles;

  const fumStats = [
    createData('Fum Forced:', fumForced),
    createData('Fum Lost:', fumLost),
    createData('Fum Opp Rec:', fumOppRec),
    createData('Fum Own Rec:', fumOwnRec),
    createData('Fum Rec Yds:', fumRecYds),
    createData('Fum TD:', fumTD),
    createData('Fum Total Rec:', fumTotalRec),
    createData('Fumbles:', fumbles)
  ];

  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary
        expandIcon={
          <ExpandMoreIcon style={{ color: `${secondaryTeamColor}` }} />
        }
        aria-controls='panel3a-content'
        id='panel3a-header'
        style={{ backgroundColor: `${primaryTeamColor}` }}
      >
        <Typography
          style={{
            color: `${secondaryTeamColor}`
          }}
          variant='h5'
        >
          Fumble Stats
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {fumStats.length &&
          fumStats.map((p) => (
            <List dense key={p.name}>
              <ListItemText primary={p.name} />
              <ListItemSecondaryAction>{p.info}</ListItemSecondaryAction>
            </List>
          ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default FumbleStats;
