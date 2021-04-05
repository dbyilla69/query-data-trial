import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import usePlayerDetails from '../hooks/usePlayerDetails';
import { useParams } from 'react-router-dom';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { createData } from '../util';
import Container from '@material-ui/core/Container';
import FloatingActionButtonZoom from '../components/PlayersStats/New-Stuff/floating-action-button';

const useStyles = makeStyles({
  root: { height: 326, width: 500 },
  descriptionRoot: { height: 326, width: 600 },
  media: {
    height: 545,
    width: 520
    // objectFit: 'contain'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  backgroundImage: {
    width: '80%',
    height: '1000px',
    // padding: '10px',
    position: 'absolute',
    zIndex: '-1',
    opacity: '.4'
  }
});

export default function PlayerDetails() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const { playerSlug } = useParams();
  const { data, error, isLoading } = usePlayerDetails(playerSlug);
  if (isLoading) return <h2>Loading...</h2>; //<CircleLoader size={400} color={'#033369'} />;
  if (error) throw error;
  const playerStat = data.playerStatsTotals[0].player;
  const stats = data.playerStatsTotals[0].stats;
  const primaryTeamColor = data.references.teamReferences[0].teamColoursHex[0];
  const secondaryTeamColor =
    data.references.teamReferences[0].teamColoursHex[1];
  const teamLogo = data.references.teamReferences[0].officialLogoImageSrc;
  const playersInfo = [
    createData('Position:', playerStat.primaryPosition),
    createData('Age:', playerStat.age),
    createData('College:', playerStat.college)

    // createData('Games Played', stats.gamesPlayed)
  ];
  const teamName = data.references.teamReferences[0].name; //data.references.teamReferences[0].city
  const teamCity = data.references.teamReferences[0].city; //data.references.teamReferences[0].city
  const morePlayerInfo = [
    createData('Height:', playerStat.height),
    createData('Weight:', playerStat.weight)

    // createData('Games Started', stats.miscellaneous.gamesStarted)
  ];

  return (
    <Container
      style={{
        filter: `drop-shadow(16px 16px 20px ${primaryTeamColor})`,
        height: '100vh'
      }}
    >
      <Grid style={{ height: '200px', width: '1448px' }} container spacing={5}>
        <Grid
          item
          // className={classes.backgroundImage}
          spacing={8}
          style={{
            background: `url(${teamLogo}) left 10% bottom 30%/cover no-repeat border-box transparent`,
            filter: `drop-shadow(16px 16px 20px ${primaryTeamColor})`,
            // border: '2px solid black',
            padding: ' 80px',
            //   background: `url(${teamLogo})`,
            //   backgroundSize: 'cover',
            //   backgroundRepeat: 'no-repeat',
            height: '175px',
            //   width: '1448px',
            backgroundSize: '150px 150px'
          }}
        />

        <Grid item>
          <Typography variant='h1'>{`${teamCity} ${teamName}`}</Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item>
          <Card className={classes.root} variant='outlined'>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={
                  playerStat.officialImageSrc
                  // 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
                }
                title='Paella dish'
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.descriptionRoot} variant='outlined'>
            <CardHeader
              avatar={
                <Avatar
                  style={{
                    backgroundColor: `${primaryTeamColor}`
                  }}
                  variant='square'
                >
                  {playerStat.jerseyNumber}
                </Avatar>
              }
              title={
                <Typography
                  variant='h4'
                  align='left'
                  style={{
                    color: `${secondaryTeamColor}`
                  }}
                >
                  {`${playerStat.firstName} ${playerStat.lastName}`}
                </Typography>
              }
            />

            <CardContent>
              <Grid container spacing={2}>
                <Grid item>
                  {playersInfo.map((p) => (
                    <div key={p.name}>{`${p.name} ${p.info}`}</div>
                  ))}
                </Grid>
                <Grid item>
                  {morePlayerInfo.map((p) => (
                    <div key={p.name}>{`${p.name} ${p.info}`}</div>
                  ))}
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <FloatingActionButtonZoom
          className={classes.floatingButton}
          playerStat={playerStat}
          stats={stats}
        />
      </Grid>
    </Container>
  );
}
