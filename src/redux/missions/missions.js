import initialState from '../initialState';

// Constants
const FETCH_MISSION = 'FETCH_MISSION';
const LEAVE_JOIN_MISSION = 'LEAVE_JOIN_MISSION';

// Action Creators
export const fetchData = (payload) => ({
  type: FETCH_MISSION,
  payload,
});

export const leaveJoinMission = (id) => ({
  type: LEAVE_JOIN_MISSION,
  payload: id,
});

// Reducesrs
export const missionReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LEAVE_JOIN_MISSION:
      return state.map((rocket) => {
        if (rocket.id !== payload) return rocket;
        return { ...rocket, joined: !rocket.joined };
      });

    case FETCH_MISSION:
      return payload;

    default:
      return state;
  }
};

export const getMissionsFromServer = () => async (dispatch) => {
  const url = 'https://api.spacexdata.com/v3/missions';
  const tempResult = await fetch(url);
  const finalResult = await tempResult.json();

  const data = finalResult.map((item) => {
    const {
      mission_id: id,
      mission_name: name,
      description,
    } = item;
    return {
      id,
      name,
      description,
      joined: false,
    };
  });
  dispatch(fetchData(data));
};
