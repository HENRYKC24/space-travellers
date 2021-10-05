import initialState from '../initialState';

// Constants
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

// Action Creators
export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leaveMission = () => ({
  type: LEAVE_MISSION,
  payload: false,
});

// Reducesrs
export const missionReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case JOIN_MISSION:
      return state.map((rocket) => {
        if (rocket.id !== payload) return rocket;
        return { ...rocket, reserved: true };
      });

    case LEAVE_MISSION:
      return state;
    default:
      return state;
  }
};
