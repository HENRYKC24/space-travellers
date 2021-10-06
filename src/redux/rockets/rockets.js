import initialState from '../initialState';

// Constants
const ADD_RESERVATION = 'space_travellers/rockets/ADD_RESERVATION';
const REMOVE_RESERVATION = 'space_travellers/rockets/REMOVE_RESERVATION';
const FETCH_DATA = 'space_travellers/rockets/FETCH_DATA';

// Action Creators
export const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const addRevervation = (id) => ({
  type: ADD_RESERVATION,
  payload: id,
});

export const removeReservation = () => ({
  type: REMOVE_RESERVATION,
  payload: false,
});

// Reducers
const rocketReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA:
      return payload;
    case ADD_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== payload) return rocket;
        return { ...rocket, reserved: !rocket.reserved };
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

export const getRocketsFromServer = () => async (dispatch) => {
  const url = 'https://api.spacexdata.com/v3/rockets';
  const tempResult = await fetch(url);
  const finalResult = await tempResult.json();
  const data = finalResult.map((item) => {
    const {
      id,
      rocket_name: rocketName,
      description,
      flickr_images: rocketImageArray,
    } = item;
    return {
      id,
      rocketName,
      description,
      rocketImage: rocketImageArray[0],
      reserved: false,
    };
  });
  dispatch(fetchData(data));
};

export default rocketReducer;
