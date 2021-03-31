// import AccordionPlayer from '../components/Players/accordionPlayer';
// import CircleLoader from 'react-spinners/CircleLoader';
// import { Fragment } from 'react';
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import { useParams } from 'react-router-dom';
// import usePlayerDetails from '../hooks/usePlayerDetails';
// import PlayerCard from '../components/Players/playerCard';
// import PlayerInfo from '../components/Players/playerInfo';
// import MorePlayerInfo from '../components/Players/morePlayerInfo';

// const useStyles = makeStyles(() => ({
//   backgroundImage: {
//     width: '100%',
//     height: '1200px',
//     padding: '10px',
//     position: 'absolute',
//     zIndex: '-1',
//     opacity: '.4'
//   }
// }));

// const PlayerDetails = () => {
//   const classes = useStyles();
//   const { playerSlug } = useParams();
//   const { data, error, isLoading } = usePlayerDetails(playerSlug);

//   if (isLoading) return <CircleLoader size={400} color={'#033369'} />;
//   if (error) throw error;

//   const primaryTeamColor = data.references.teamReferences[0].teamColoursHex[0];
//   const playerStat = data.playerStatsTotals[0].player;
//   const stats = data.playerStatsTotals[0].stats;
//   const teamLogo = data.references.teamReferences[0].officialLogoImageSrc;
//   const secondaryTeamColor =
//     data.references.teamReferences[0].teamColoursHex[1];

//   return (
//     <Fragment>
//       <div
//         className={classes.backgroundImage}
//         style={{
//           background: `url(${teamLogo}) left 20% bottom 60%/cover no-repeat border-box transparent`,
//           filter: `drop-shadow(16px 16px 20px ${primaryTeamColor})`
//         }}
//       />
//       <Grid container spacing={4}>
//         <PlayerCard
//           playerStat={playerStat}
//           primaryTeamColor={primaryTeamColor}
//         />
//         <PlayerInfo playerStat={playerStat} stats={stats} />
//         <MorePlayerInfo playerStat={playerStat} stats={stats} />
//       </Grid>
//       <AccordionPlayer
//         stats={stats}
//         secondaryTeamColor={secondaryTeamColor}
//         primaryTeamColor={primaryTeamColor}
//       />
//     </Fragment>
//   );
// };

// export default PlayerDetails;
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import usePlayerDetails from '../hooks/usePlayerDetails';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: 'auto',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    maxWidth: 500,
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2)
    }
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)'
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: spacing(2), // 16
      opacity: 0.5
    }
  },
  content: {
    padding: 24
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial'
  }
}));

export const PlayerDetails = React.memo(function BlogCard() {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  const { playerSlug } = useParams();
  const { data, error, isLoading } = usePlayerDetails(playerSlug);

  if (isLoading) return <h2>Loading...</h2>; //<CircleLoader size={400} color={'#033369'} />;
  if (error) throw error;
  const playerStat = data.playerStatsTotals[0].player;
  const primaryTeamColor = data.references.teamReferences[0].teamColoursHex[0];
  console.log('PS', playerStat);
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        className={styles.media}
        image={
          playerStat.officialImageSrc
          // 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
        }
      />
      <CardContent>
        <div>THis is a test</div>
        <TextInfoContent
          classes={contentStyles}
          overline={'28 MAR 2019'}
          avatar={
            <Avatar
              style={{
                backgroundColor: `${primaryTeamColor}`
              }}
              variant='square'
            >
              {playerStat.jerseyNumber}
            </Avatar>
            // 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2000px-Git_icon.svg.png'
          }
          heading={`${playerStat.firstName} ${playerStat.lastName}`}
          body={
            <>
              <div>Git is a distributed version control system. </div>
              <div>Every dev has a working copy of the code and...</div>
            </>
          }
        />
        {/* <Button className={buttonStyles}>{playerStat.jerseyNumber}</Button> */}
      </CardContent>
    </Card>
  );
});

export default PlayerDetails;
