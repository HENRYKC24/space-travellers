import initialState from '../initialState';

// Constants
const FETCH_MISSION = 'FETCH_MISSION';
const JOIN_MISSION = 'JOIN_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

// Action Creators
export const fetchData = (payload) => ({
  type: FETCH_MISSION,
  payload,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

// Reducesrs
export const missionReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id !== payload) return mission;
        return { ...mission, joined: !mission.joined };
      });

    case FETCH_MISSION:
      return payload;

    case LEAVE_MISSION:
      return state;
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
