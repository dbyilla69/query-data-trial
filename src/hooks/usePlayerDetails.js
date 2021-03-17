import { useQuery } from 'react-query';
import axios from 'axios';
import { playerDetailsApi, header } from '../util';

const getPlayerDetails = async (playerSlug) => {
  const playerDetailsData = await axios
    .get(playerDetailsApi(playerSlug), header)
    .then((res) => res.data);
  return playerDetailsData;
};

export default function useTeam(playerSlug) {
  return useQuery(['team', playerSlug], () => getPlayerDetails(playerSlug));
}
