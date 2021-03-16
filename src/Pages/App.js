import { Routes, Route } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import TeamSelect from './team-select';
import PlayerDetails from './playerDetails';

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
