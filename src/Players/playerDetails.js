import AccordionPlayer from './accordionPlayer';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CircleLoader from 'react-spinners/CircleLoader';
import { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import { createData } from '../util';
import { makeStyles } from '@material-ui/core/styles';
import useAxios from '../hooks/useAxios';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: { minWidth: 400, marginLeft: theme.spacing(4) },
  media: {
    height: 440
  },
  backgroundImage: {
    width: '100%',
    height: '1200px',
    padding: '10px',
    position: 'absolute',
    zIndex: '-1',
    opacity: '.4'
  },
  playerDemographicTable: {
    width: '20em'
  }
}));

const PlayerDetails = () => {
  const classes = useStyles();
  const { playerSlug } = useParams();
  const { data, loading, error } = useAxios(
    `/2019-2020-regular/player_stats_totals.json?player=${playerSlug}&limit=20`
  );

  if (loading) return <CircleLoader size={400} color={'#033369'} />;
  if (error) throw error;
  
  const primaryTeamColor = data.references.teamReferences[0].teamColoursHex[0];
  const playerStat = data.playerStatsTotals[0].player;
  const stats = data.playerStatsTotals[0].stats;
  const teamLogo = data.references.teamReferences[0].officialLogoImageSrc;

  const secondaryTeamColor =
    data.references.teamReferences[0].teamColoursHex[1];

  const playersInfo = [
    createData('Position', playerStat.primaryPosition),
    createData('Age', playerStat.age),
    createData('Height', playerStat.height),
    createData('Weight', playerStat.weight),
    createData('Games Played', stats.gamesPlayed)
  ];

  const morePlayerInfo = [
    createData('Jersey', playerStat.jerseyNumber),
    createData('Status', playerStat.currentRosterStatus),
    createData('Born', playerStat.birthDate),
    createData('College', playerStat.college),
    createData('Games Started', stats.miscellaneous.gamesStarted)
  ];

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
        <Card className={classes.root}>
          <CardHeader
            avatar={<Avatar src={teamLogo} aria-label='recipe' />}
            title={
              <Typography variant='h4' align='left'>
                {`${playerStat.firstName} ${playerStat.lastName}`}
              </Typography>
            }
          />
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={playerStat.officialImageSrc}
              title='Contemplative Reptile'
            />
          </CardActionArea>
        </Card>
        <Grid item>
          <TableContainer
            className={classes.playerDemographicTable}
            component={Paper}
          >
            <Table size='small' aria-label='simple table'>
              <TableBody>
                {playersInfo.map((p) => (
                  <TableRow key={p.name}>
                    <TableCell>{p.name}</TableCell>
                    <TableCell>{p.info}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item>
          <TableContainer
            className={classes.playerDemographicTable}
            component={Paper}
          >
            <Table size='small' aria-label='simple'>
              <TableBody>
                {morePlayerInfo.map((p) => (
                  <TableRow key={p.name}>
                    <TableCell component='th'>{p.name}</TableCell>
                    <TableCell component='th'>{p.info}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
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
