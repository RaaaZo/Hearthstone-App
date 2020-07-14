import axios from "axios";
import {
  FETCH_EXPANSIONS_CARDS_REQUEST,
  FETCH_EXPANSIONS_CARDS_SUCCESS,
  FETCH_EXPANSIONS_CARDS_FAILURE,
} from "ducks/constants/FetchConstants";

export const fetchExpansionsCardsRequest = () => {
  return {
    type: FETCH_EXPANSIONS_CARDS_REQUEST,
  };
};

export const fetchExpansionsCardsSuccess = (data) => {
  return {
    type: FETCH_EXPANSIONS_CARDS_SUCCESS,
    payload: data,
  };
};

export const fetchExpansionsCardsFailure = (error) => {
  return {
    type: FETCH_EXPANSIONS_CARDS_FAILURE,
    payload: error,
  };
};

export const fetchExpansionsCards = () => {
  return (dispatch) => {
    dispatch(fetchExpansionsCardsRequest());
    axios({
      method: "GET",
      url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/Classic",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        useQueryString: true,
      },
      params: {
        locale: "plPL",
        collectible: "1",
      },
    })
      .then((response) => {
        // response.data is the OneCard
        const cardData = response.data;
        dispatch(fetchExpansionsCardsSuccess(cardData));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchExpansionsCardsFailure(error.message));
      });
  };
};
