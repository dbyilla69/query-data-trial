import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { rbStats, wrStats, qbStats } from './offensive-stats';
import { createData } from '../../../util';

const useStyles = makeStyles({
  root: {
    minWidth: 275
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
  }
});

export default function SimpleCard({ playerStat, stats }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const rushingStats = [
    createData('Rush 1st Downs:', stats.rushing?.rush1stDowns),
    createData('Rush 1st Downs Pct:', stats.rushing?.rush1stDownsPct),
    createData('Rush 20 Plus:', stats.rushing?.rush20Plus),
    createData('Rush 40 Plus:', stats.rushing?.rush40Plus),
    createData('Rush Attempts:', stats.rushing?.rushAttempts),
    createData('Rush Average:', stats.rushing?.rushAverage),
    createData('Rush Fumbles:', stats.rushing?.rushFumbles),
    createData('Rush Lng: ', stats.rushing?.rushLng),
    createData('Rush TD:', stats.rushing?.rushTD),
    createData('Rush Yards:', stats.rushing?.rushYards),
    createData('Rec 1st Downs:', stats.receiving?.rec1stDowns),
    createData('Rec 20 Plus:', stats.receiving?.rec20Plus),
    createData('Rec 40 Plus:', stats.receiving?.rec40Plus),
    createData('Rec Average: ', stats.receiving?.recAverage),
    createData('Rec Fumbles:', stats.receiving?.recFumbles),
    createData('Rec Long:', stats.receiving?.recLng),
    createData('Rec TD:', stats.receiving?.recTD),
    createData('Rec Yards:', stats.receiving?.recYards),
    createData('Receptions:', stats.receiving?.receptions),
    createData('Targets:', stats.receiving?.targets),
    createData('Fum Forced:', stats.fumbles?.fumForced),
    createData('Fum Lost:', stats.fumbles?.fumLost),
    createData('Fum Opp Rec:', stats.fumbles?.fumOppRec),
    createData('Fum Own Rec:', stats.fumbles?.fumOwnRec),
    createData('Fum Rec Yds:', stats.fumbles?.fumRecYds),
    createData('Fum TD:', stats.fumbles?.fumTD),
    createData('Fum Total Rec:', stats.fumbles?.fumTotalRec),
    createData('Fumbles:', stats.fumbles?.fumbles),
    createData('Pass 20 Plus:', stats.passing?.pass20Plus),
    createData('Pass 40 Plus:', stats.passing?.pass40Plus),
    createData('Pass Attempts:', stats.passing?.passAttempts),
    createData('Pass Average:', stats.passing?.passAvg),
    createData('Pass Completions:', stats.passing?.passCompletions),
    createData('Pass Int:', stats.passing?.passInt),
    createData('Pass Int Pct:', stats.passing?.passIntPct),
    createData('Pass Lng:', stats.passing?.passLng),
    createData('Pass Pct:', stats.passing?.passPct),
    createData('Pass Sack Yards: ', stats.passing?.passSackY),
    createData('Pass Sacks:', stats.passing?.passSacks),
    createData('Pass TD:', stats.passing?.passTD),
    createData('Pass TD Pct:', stats.passing?.passTDPct),
    createData('Pass Yards:', stats.passing?.passYards),
    createData('Pass Yards Per Att: ', stats.passing?.passYardsPerAtt),
    createData('Qb Rating:', stats.passing?.qbRating)
  ];

  console.log('rbstats', rushingStats);
  return (
    <Card className={classes.root}>
      <CardContent>
        {/* {playerStat.primaryPosition === 'RB' && rbStats(stats)} */}
        {rushingStats}
        {/* {rbStats(playerStat, stats)}
        {wrStats(playerStat, stats)}
        {qbStats(playerStat, stats)} */}
      </CardContent>
    </Card>
  );
}
