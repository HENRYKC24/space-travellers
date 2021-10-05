import { initialState } from '../initialState';

// Constants
const ADD_RESERVATION = 'space_travellers/rockets/ADD_RESERVATION';
const REMOVE_RESERVATION = 'space_travellers/rockets/REMOVE_RESERVATION';

// Action Creators
export const addRevervation = (id) => ({
  type: ADD_RESERVATION,
  payload: id,
});

export const removeReservation = () => ({
  type: REMOVE_RESERVATION,
  payload: false,
});

// Reducesrs
export const rocketReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== payload) return rocket;
        return { ...rocket, reserved: true };
      });

    case REMOVE_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== payload) return rocket;
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};
