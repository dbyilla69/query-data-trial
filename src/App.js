import Teams from './Teams/teams';
import PlayerDetails from './Players/playerDetails';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Teams />} />
        <Route path='/playerStats/:playerSlug' element={<PlayerDetails />} />
      </Routes>
    </div>
  );
};

export default App;
