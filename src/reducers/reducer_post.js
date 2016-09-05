import { ALL_TIME_FETCH, RECENT_FETCH } from '../actions/index';

export default function(state = {post: null}, action){
  switch (action.type) {
    case ALL_TIME_FETCH:
      return {...state, post: action.payload.data};
    case RECENT_FETCH:
      return {...state, post: action.payload.data};
    default:
    return state;
  }
}
