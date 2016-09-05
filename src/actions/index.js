import axios from 'axios';

const ALL_TIME_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
const RECENT_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

export const ALL_TIME_FETCH = 'ALL_TIME_FETCH';
export const RECENT_FETCH = 'RECENT_FETCH';

export function alltimeFetch(){

  const request = axios.get(ALL_TIME_URL);

  return {
    type: ALL_TIME_FETCH,
    payload: request
  };
}


export function recentFetch(){

  const request = axios.get(RECENT_URL);

  return {
    type: RECENT_FETCH,
    payload: request
  };
}
