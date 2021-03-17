import { useQuery } from 'react-query';
import axios from 'axios';
import { api, header } from '../util';

const getTeamRoster = async (team) => {
  const dataRoster = await axios
    .get(api(team), header)
    .then((res) => res.data.playerStatsTotals);
  return dataRoster;
};

export default function useTeam(team) {
  return useQuery(['team', team], () => getTeamRoster(team));
}
