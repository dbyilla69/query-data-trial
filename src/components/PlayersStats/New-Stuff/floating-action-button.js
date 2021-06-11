import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import RushingStats from '../rushingStats';
import PlayerDetailsInfo from '../../Players/player-info-details';
import OffensiveSpecialistStats from './offensive-specialist-stats';
import CollapsibleTable from './weekly-stats-breakdown';
import { createData } from '../../../util';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component='div'
      role='tabpanel'
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    width: '89.5%',
    position: 'relative',
    minHeight: 200,
    marginTop: '24px'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600]
    }
  }
}));

export default function FloatingActionButtonZoom({ playerStat, stats }) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };

  const fabs = [
    {
      color: 'primary',
      className: classes.fab,
      icon: <AddIcon />,
      label: 'Add'
    },
    {
      color: 'secondary',
      className: classes.fab,
      icon: <EditIcon />,
      label: 'Edit'
    },
    {
      color: 'inherit',
      className: clsx(classes.fab, classes.fabGreen),
      icon: <UpIcon />,
      label: 'Expand'
    }
  ];

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

  console.log('player data', rushingStats);
  return (
    <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          variant='fullWidth'
          aria-label='action tabs example'
        >
          <Tab label='Overall' {...a11yProps(0)} />
          <Tab label='Stats' {...a11yProps(1)} />
          {/* <Tab label='Item Three' {...a11yProps(2)} /> */}
        </Tabs>
      </AppBar>
      {/* <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      > */}

      <TabPanel value={value} index={0} dir={theme.direction}>
        {rushingStats.map((p) => (
          <List dense key={p.name}>
            <ListItemText primary={p.name} />
            <ListItemSecondaryAction>{p.info}</ListItemSecondaryAction>
          </List>
        ))}
        {/* <OffensiveSpecialistStats stats={stats} playerStat={playerStat} /> */}
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <CollapsibleTable />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        Item Three
      </TabPanel>
      {/* </SwipeableViews> */}
      {/* {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${
              value === index ? transitionDuration.exit : 0
            }ms`
          }}
          unmountOnExit
        >
          <Fab
            aria-label={fab.label}
            className={fab.className}
            color={fab.color}
          >
            {fab.icon}
          </Fab>
        </Zoom>
      ))} */}
    </div>
  );
}
