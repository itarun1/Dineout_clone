import {
  ADD_REST,
  DEL_REST,
  GET_REST_LOADING,
  GET_REST_SUCCESS,
  SET_LOADING_FALSE,
  SET_LOADING_TRUE,
} from "./actionTypes";

export const addRest = (payload) => {
  return { type: ADD_REST, payload };
};

export const getRestLoading = () => {
  return { type: GET_REST_LOADING };
};

export const setLoadingTrue = () => {
  return { type: SET_LOADING_TRUE };
};

export const setLoadingFalse = () => {
  return { type: SET_LOADING_FALSE };
};

export const getRestSuccess = (payload) => {
  return { type: GET_REST_SUCCESS, payload };
};

export const delRest = (payload) => {
  return { type: DEL_REST, payload };
};

export const getRestaurants = () => (dispatch) => {
  dispatch(getRestLoading());
  fetch("https://dineout-server.herokuapp.com/restaurants")
    .then((api) => api.json())
    .then((data) => {
      console.log(data);
      dispatch(getRestSuccess(data));
    })
    .finally(() => {
      dispatch(setLoadingFalse());
    });
};

export const applyFilters = (payload) => (dispatch) => {
  dispatch(getRestLoading());
  fetch(`https://dineout-server.herokuapp.com/restaurants`)
    .then((api) => api.json())
    .then((data) => {
      const { wifi_service, cards_accepted, wallet_accepted, air_conditioned } =
        payload;
      let c_data = [...data];

      if (wifi_service) {
        c_data = c_data.filter((c) => c.features.includes("wifi"));
      }

      if (cards_accepted) {
        c_data = c_data.filter((c) => c.features.includes("cards_accepted"));
      }

      if (wallet_accepted) {
        c_data = c_data.filter((c) => c.features.includes("wallet"));
      }

      if (air_conditioned) {
        c_data = c_data.filter((c) => c.features.includes("Air Conditioned"));
      }

      dispatch(getRestSuccess(c_data));
    })
    .finally(() => dispatch(setLoadingFalse()));
};

export const applyCuisine = (payload) => (dispatch) => {
  dispatch(getRestLoading());
  fetch(`https://dineout-server.herokuapp.com/restaurants`)
    .then((api) => api.json())
    .then((data) => {
      let c_rest = [...data];
      switch (payload) {
        case "North Indian":
          c_rest = c_rest.filter((c) => c.type.includes("North Indian"));
          break;

        case "Fast Food":
          c_rest = c_rest.filter((c) => c.type.includes("Fast Food"));
          break;

        case "Chinese":
          c_rest = c_rest.filter((c) => c.type.includes("Chinese"));
          break;

        case "Italian":
          c_rest = c_rest.filter((c) => c.type.includes("Italian"));
          break;

        case "Continental":
          c_rest = c_rest.filter((c) => c.type.includes("Continental"));
          break;

        default:
          break;
      }
      dispatch(getRestSuccess(c_rest));
    })
    .finally(() => dispatch(setLoadingFalse()));
};

export const applySearch = (payload) => (dispatch) => {
  dispatch(getRestLoading());
  fetch(`https://dineout-server.herokuapp.com/restaurants`)
    .then((api) => api.json())
    .then((data) => {
      let c_arr = data.filter((c) =>
        c.name.toLowerCase().startsWith(payload.toLowerCase())
      );
      dispatch(getRestSuccess(c_arr));
    })
    .finally(() => dispatch(setLoadingFalse()));
};
