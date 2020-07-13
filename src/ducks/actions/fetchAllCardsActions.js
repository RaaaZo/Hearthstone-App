import axios from "axios";
import {
  FETCH_ALL_CARDS_REQUEST,
  FETCH_ALL_CARDS_SUCCESS,
  FETCH_ALL_CARDS_FAILURE,
} from "ducks/constants/FetchConstants";

export const fetchAllCardsRequest = () => {
  return {
    type: FETCH_ALL_CARDS_REQUEST,
  };
};

export const fetchAllCardsSuccess = (data) => {
  return {
    type: FETCH_ALL_CARDS_SUCCESS,
    payload: data,
  };
};

export const fetchAllCardsFailure = (error) => {
  return {
    type: FETCH_ALL_CARDS_FAILURE,
    payload: error,
  };
};

export const fetchAllCards = () => {
  return (dispatch) => {
    dispatch(fetchAllCardsRequest());
    axios({
      method: "GET",
      url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/info",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        useQueryString: true,
      },
      params: {
        locale: "plPL",
      },
    })
      .then((response) => {
        // response.data is the AllCards
        const cardData = response.data;
        dispatch(fetchAllCardsSuccess(cardData));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchAllCardsFailure(error.message));
      });
  };
};
