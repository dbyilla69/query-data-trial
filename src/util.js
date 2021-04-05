export const createData = (name, info) => {
  return { name, info };
};

const username = '5f7e91ad-20ed-4f10-88d2-f0ea7d';
const password = 'MYSPORTSFEEDS';
export const api = (team) =>
  `https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-2020-regular/player_stats_totals.json?team=${team}&limit=20`;

export const playerDetailsApi = (playerSlug) =>
  `https://api.mysportsfeeds.com/v2.1/pull/nfl//2019-2020-regular/player_stats_totals.json?player=${playerSlug}`;

export const header = {
  headers: {
    Authorization: 'Basic ' + btoa(username + ':' + password)
  }
};
