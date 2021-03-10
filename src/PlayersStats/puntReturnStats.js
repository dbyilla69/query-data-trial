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

const PuntReturnStats = ({ stats, primaryTeamColor, secondaryTeamColor }) => {
  const classes = useStyles();
  const {
    pr20Plus,
    pr40Plus,
    prAvg,
    prFC,
    prFum,
    prLng,
    prRet,
    prTD,
    prYds
  } = stats.puntReturns;

  const puntStats = [
    createData('pr20Plus:', pr20Plus),
    createData('pr40Plus:', pr40Plus),
    createData('prAvg:', prAvg),
    createData('prFC:', prFC),
    createData('prFum:', prFum),
    createData('prLng:', prLng),
    createData('prRet:', prRet),
    createData('prTD:', prTD),
    createData('prYds:', prYds)
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
          Punt Returns
        </Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {puntStats.map((p) => (
          <List dense key={p.name}>
            <ListItemText primary={p.name} />
            <ListItemSecondaryAction>{p.info}</ListItemSecondaryAction>
          </List>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default PuntReturnStats;
