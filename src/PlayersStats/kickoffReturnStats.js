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

const KickoffReturnStats = ({
  stats,
  primaryTeamColor,
  secondaryTeamColor
}) => {
  const classes = useStyles();

  const kickoffStats = [
    createData('kr20Plus:', stats.kickoffReturns.kr20Plus),
    createData('kr40Plus:', stats.kickoffReturns.kr40Plus),
    createData('krAvg:', stats.kickoffReturns.krAvg),
    createData('krFC:', stats.kickoffReturns.krFC),
    createData('krFum:', stats.kickoffReturns.krFum),
    createData('krLng:', stats.kickoffReturns.krLng),
    createData('krRet:', stats.kickoffReturns.krRet),
    createData('krTD:', stats.kickoffReturns.krTD),
    createData('krYds:', stats.kickoffReturns.krYds)
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
          Kickoff Returns
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {kickoffStats.map((p) => (
          <List dense key={p.name}>
            <ListItemText primary={p.name} />
            <ListItemSecondaryAction>{p.info}</ListItemSecondaryAction>
          </List>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default KickoffReturnStats;
