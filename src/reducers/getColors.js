import { STATES } from '../constants';
import { GET_COLORS } from '../actions';

const initialState = {
  items: [],
  state: STATES.PENDING,
  errors: undefined,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_COLORS:
      return { ...state, state: STATES.SUCCESS, items: [...action.payload] };
    default:
      return state;
  }
}
