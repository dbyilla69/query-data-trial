import AccordionPlayer from '../components/Players/accordionPlayer';
import CircleLoader from 'react-spinners/CircleLoader';
import { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import usePlayerDetails from '../hooks/usePlayerDetails';
import PlayerCard from '../components/Players/playerCard';
import PlayerInfo from '../components/Players/playerInfo';
import MorePlayerInfo from '../components/Players/morePlayerInfo';

const useStyles = makeStyles(() => ({
  backgroundImage: {
    width: '100%',
    height: '1200px',
    padding: '10px',
    position: 'absolute',
    zIndex: '-1',
    opacity: '.4'
  }
}));

const PlayerDetails = () => {
  const classes = useStyles();
  const { playerSlug } = useParams();
  const { data, error, isLoading } = usePlayerDetails(playerSlug);

  if (isLoading) return <CircleLoader size={400} color={'#033369'} />;
  if (error) throw error;

  const primaryTeamColor = data.references.teamReferences[0].teamColoursHex[0];
  const playerStat = data.playerStatsTotals[0].player;
  const stats = data.playerStatsTotals[0].stats;
  const teamLogo = data.references.teamReferences[0].officialLogoImageSrc;
  const secondaryTeamColor =
    data.references.teamReferences[0].teamColoursHex[1];

  return (
    <Fragment>
      <div
        className={classes.backgroundImage}
        style={{
          background: `url(${teamLogo}) left 20% bottom 60%/cover no-repeat border-box transparent`,
          filter: `drop-shadow(16px 16px 20px ${primaryTeamColor})`
        }}
      />
      <Grid container spacing={4}>
        <PlayerCard
          playerStat={playerStat}
          primaryTeamColor={primaryTeamColor}
        />
        <PlayerInfo playerStat={playerStat} stats={stats} />
        <MorePlayerInfo playerStat={playerStat} stats={stats} />
      </Grid>
      <AccordionPlayer
        stats={stats}
        secondaryTeamColor={secondaryTeamColor}
        primaryTeamColor={primaryTeamColor}
      />
    </Fragment>
  );
};

export default PlayerDetails;
