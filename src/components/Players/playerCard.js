import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: { minWidth: 400, marginLeft: theme.spacing(4) },
  media: {
    height: 440
  }
}));

const PlayerCard = ({ playerStat, teamLogo }) => {
  const classes = useStyles();
  return (
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
  );
};

export default PlayerCard;
