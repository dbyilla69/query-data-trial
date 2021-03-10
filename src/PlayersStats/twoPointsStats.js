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

const TwoPointsStats = ({ stats, primaryTeamColor, secondaryTeamColor }) => {
  const classes = useStyles();

  const twoPointConversionStats = [
    createData('twoPtAtt:', stats.twoPointAttempts?.twoPtAtt),
    createData('twoPtMade:', stats.twoPointAttempts?.twoPtMade),
    createData('twoPtPassAtt:', stats.twoPointAttempts?.twoPtPassAtt),
    createData('twoPtPassMade:', stats.twoPointAttempts?.twoPtPassMade),
    createData('twoPtPassRec:', stats.twoPointAttempts?.twoPtPassRec),
    createData('twoPtRushAtt: ', stats.twoPointAttempts?.twoPtRushAtt),
    createData('twoPtRushMade:', stats.twoPointAttempts?.twoPtRushMade)
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
          Two points Conversions
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {twoPointConversionStats.length &&
          twoPointConversionStats.map((p) => (
            <List dense key={p.name}>
              <ListItemText primary={p.name} />
              <ListItemSecondaryAction>{p.info}</ListItemSecondaryAction>
            </List>
          ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default TwoPointsStats;
