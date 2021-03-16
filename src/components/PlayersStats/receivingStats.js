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

const ReceivingStats = ({ stats, primaryTeamColor, secondaryTeamColor }) => {
  const classes = useStyles();

  const receivingStats = [
    createData('Rec 1st Downs:', stats.receiving?.rec1stDowns),
    createData('Rec 20 Plus:', stats.receiving?.rec20Plus),
    createData('Rec 40 Plus:', stats.receiving?.rec40Plus),
    createData('Rec Average: ', stats.receiving?.recAverage),
    createData('Rec Fumbles:', stats.receiving?.recFumbles),
    createData('Rec Long:', stats.receiving?.recLng),
    createData('Rec TD:', stats.receiving?.recTD),
    createData('Rec Yards:', stats.receiving?.recYards),
    createData('Receptions:', stats.receiving?.receptions),
    createData('Targets:', stats.receiving?.targets)
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
          Receiving Stats
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {receivingStats.length &&
          receivingStats.map((p) => (
            <List dense key={p.name}>
              <ListItemText primary={p.name} />
              <ListItemSecondaryAction>{p.info}</ListItemSecondaryAction>
            </List>
          ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default ReceivingStats;
