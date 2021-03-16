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

const Interceptions = ({ stats, primaryTeamColor, secondaryTeamColor }) => {
  const classes = useStyles();
  const {
    intAverage,
    intLng,
    intTD,
    intYds,
    interceptions,
    kB,
    passesDefended,
    safeties,
    stuffYds,
    stuffs
  } = stats.interceptions;
  const intStats = [
    createData('intAverage:', intAverage),
    createData('intLng:', intLng),
    createData('intTD:', intTD),
    createData('intYds:', intYds),
    createData('interceptions:', interceptions),
    createData('kB:', kB),
    createData('passesDefended:', passesDefended),
    createData('safeties:', safeties),
    createData('stuffYds:', stuffYds),
    createData('stuffs:', stuffs)
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
          Interceptions
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {intStats.length &&
          intStats.map((p) => (
            <List dense key={p.name}>
              <ListItemText primary={p.name} />
              <ListItemSecondaryAction>{p.info}</ListItemSecondaryAction>
            </List>
          ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default Interceptions;
