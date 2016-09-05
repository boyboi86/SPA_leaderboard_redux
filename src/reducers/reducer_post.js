import { ALL_TIME_FETCH, RECENT_FETCH } from '../actions/index';

const INITIAL_STATE = { Apost: [], Rpost: [] }

export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case ALL_TIME_FETCH:
      return {...state, Apost: action.payload.data};
    case RECENT_FETCH:
      return {...state, Rpost: action.payload.data};
    default:
    return state;
  }
}
