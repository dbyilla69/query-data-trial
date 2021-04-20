import './stats.css';
import Grid from '@material-ui/core/Grid';
export const rbStats = (playerStat, stats) => {
  console.log('info', stats);
  if (playerStat.primaryPosition === 'RB')
    return (
      <div className='container'>
        <div>
          <div>rushAtt</div>
          <div>rushYds</div>
          <div>rushAvg</div>
          <div>lngRush</div>
          <div>rushTd</div>
          <div>rush1stDowns</div>
          <div>rush20Plus</div>
          <div>rec</div>
          <div>recTd</div>
          <div>recAvg</div>
          <div>recLng</div>
          <div>Recfum</div>
          <div>recYds</div>
          <div>targets</div>
          <div> {stats?.rushing?.rushAttempts}</div>
          <div> {stats?.rushing?.rushYards}</div>
          <div> {stats?.rushing?.rushAverage}.0</div>
          <div> {stats?.rushing?.rushLng}</div>
          <div> {stats?.rushing?.rushTD}</div>
          <div> {stats?.rushing?.rush1stDowns}</div>
          <div>{stats?.rushing?.rush20Plus}</div>
          <div>{stats?.receiving?.receptions}</div>
          <div> {stats?.receiving?.recTD}</div>
          <div> {stats?.receiving?.recAverage}</div>
          <div> {stats?.receiving?.recLng}</div>
          <div>{stats?.receiving?.recFumbles}</div>
          <div> {stats?.receiving?.recYards}</div>
          <div>{stats?.receiving?.targets}</div>
        </div>
      </div>
    );
};

export const wrStats = (playerStat, stats) => {
  if (
    playerStat.primaryPosition === 'WR' ||
    playerStat.primaryPosition === 'TE'
  )
    return (
      <>
        <div>rec: {stats?.receiving?.receptions}</div>
        <div>recTd: {stats?.receiving?.recTD}</div>
        <div>recAvg: {stats?.receiving?.recAverage}</div>
        <div>recLng: {stats?.receiving?.recLng}</div>
        <div>Recfum: {stats?.receiving?.recFumbles}</div>
        <div>recYds: {stats?.receiving?.recYards}</div>
        <div>targets: {stats?.receiving?.targets}</div>
      </>
    );
};

export const qbStats = (playerStat, stats) => {
  if (playerStat.primaryPosition === 'QB')
    return (
      <>
        <div>pass20Plus:{stats?.passing?.pass20Plus}</div>
        <div>pass40Plus:{stats?.passing?.pass40Plus}</div>
        <div>passAttempts:{stats?.passing?.passAttempts}</div>
        <div>passAvg:{stats?.passing?.passAvg}</div>
        <div>passCompletions:{stats?.passing?.passCompletions}</div>
        <div>passInt:{stats?.passing?.passInt}</div>
        <div>passSacks:{stats?.passing?.passSacks}</div>
        <div>passTD:{stats?.passing?.passTD}</div>
        <div>passTDPct: {stats?.passing?.passTDPct}</div>
        <div>passYards:{stats?.passing?.passYards}</div>
        <div>passYardsPerAtt:{stats?.passing?.passYardsPerAtt}</div>
        <div>qbRating:{stats?.passing?.qbRating}</div>
        <div>rushAtt: {stats?.rushing?.rushAttempts}</div>
        <div>rushYds: {stats?.rushing?.rushYards}</div>
        <div>rushAvg: {stats?.rushing?.rushAverage}.0</div>
        <div>lngRush: {stats?.rushing?.rushLng}</div>
        <div>rushTd: {stats?.rushing?.rushTD}</div>
        <div>rush1stDowns: {stats?.rushing?.rush1stDowns}</div>
        <div>rush20Plus: {stats?.rushing?.rush20Plus}</div>
      </>
    );
};
