import Teams from './Teams/teams';
import TeamSelect from './Teams/team-select';
import PlayerDetails from './Players/playerDetails';
import { Routes, Route } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<TeamSelect />} />
        <Route path='/playerStats/:playerSlug' element={<PlayerDetails />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
};

export default App;
