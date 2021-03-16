import FumbleStats from '../PlayersStats/fumbleStats';
import Grid from '@material-ui/core/Grid';
import Interceptions from '../PlayersStats/interceptions';
import KickoffReturnStats from '../PlayersStats/kickoffReturnStats';
import PassingStats from '../PlayersStats/passingStats';
import PuntReturnStats from '../PlayersStats/puntReturnStats';
import ReceivingStats from '../PlayersStats/receivingStats';
import RushingStats from '../PlayersStats/rushingStats';
import Tackles from '../PlayersStats/tackles';
import TwoPointsStats from '../PlayersStats/twoPointsStats';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  containerRoot: { padding: theme.spacing(4) }
}));

const AccordionPlayer = ({ stats, secondaryTeamColor, primaryTeamColor }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.containerRoot}>
      <PassingStats
        stats={stats}
        primaryTeamColor={primaryTeamColor}
        secondaryTeamColor={secondaryTeamColor}
      />
      <RushingStats
        stats={stats}
        primaryTeamColor={primaryTeamColor}
        secondaryTeamColor={secondaryTeamColor}
      />
      <ReceivingStats
        stats={stats}
        primaryTeamColor={primaryTeamColor}
        secondaryTeamColor={secondaryTeamColor}
      />
      <FumbleStats
        stats={stats}
        primaryTeamColor={primaryTeamColor}
        secondaryTeamColor={secondaryTeamColor}
      />
      <Interceptions
        stats={stats}
        primaryTeamColor={primaryTeamColor}
        secondaryTeamColor={secondaryTeamColor}
      />
      <Tackles
        stats={stats}
        primaryTeamColor={primaryTeamColor}
        secondaryTeamColor={secondaryTeamColor}
      />
      <KickoffReturnStats
        stats={stats}
        primaryTeamColor={primaryTeamColor}
        secondaryTeamColor={secondaryTeamColor}
      />
      <PuntReturnStats
        stats={stats}
        primaryTeamColor={primaryTeamColor}
        secondaryTeamColor={secondaryTeamColor}
      />
      <TwoPointsStats
        stats={stats}
        primaryTeamColor={primaryTeamColor}
        secondaryTeamColor={secondaryTeamColor}
      />
    </Grid>
  );
};

export default AccordionPlayer;
