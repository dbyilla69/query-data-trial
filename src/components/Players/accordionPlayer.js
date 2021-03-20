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
      {/*  {isStatsAvaliable && (
        <PassingStats
          stats={stats}
          primaryTeamColor={primaryTeamColor}
          secondaryTeamColor={secondaryTeamColor}
        />
      )}

      {isStatsAvaliable(stats?.rushing) && (
        <RushingStats
          stats={stats}
          primaryTeamColor={primaryTeamColor}
          secondaryTeamColor={secondaryTeamColor}
        />
      )}
      {isStatsAvaliable(stats?.receiving) && (
        <ReceivingStats
          stats={stats}
          primaryTeamColor={primaryTeamColor}
          secondaryTeamColor={secondaryTeamColor}
        />
      )}
      {isStatsAvaliable(stats?.fumbles) && (
        <FumbleStats
          stats={stats}
          primaryTeamColor={primaryTeamColor}
          secondaryTeamColor={secondaryTeamColor}
        />
      )}
      {isStatsAvaliable(stats?.interceptions) && (
        <Interceptions
          stats={stats}
          primaryTeamColor={primaryTeamColor}
          secondaryTeamColor={secondaryTeamColor}
        />
      )}
      {isStatsAvaliable(stats?.tackles) && (
        <Tackles
          stats={stats}
          primaryTeamColor={primaryTeamColor}
          secondaryTeamColor={secondaryTeamColor}
        />
      )}
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
      /> */}
    </Grid>
  );
};

export default AccordionPlayer;
