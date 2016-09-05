import { ALL_TIME_FETCH, RECENT_FETCH } from '../actions/index';

export default function(state, action){
  switch (action.type) {
    case ALL_TIME_FETCH:
      return {...state, action.payload.data};
    case RECENT_FETCH:
      return {...state, action.payload.data};
    default:
    return state;
  }
}
