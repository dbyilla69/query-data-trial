export const createData = (name, info) => {
  return { name, info };
};

const username = '8d5243ad-bd42-48dc-860b-3b58af';
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
