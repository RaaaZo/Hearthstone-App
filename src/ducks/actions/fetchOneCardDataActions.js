import axios from "axios";
import {
  FETCH_ONE_CARD_REQUEST,
  FETCH_ONE_CARD_SUCCESS,
  FETCH_ONE_CARD_FAILURE,
} from "ducks/constants/FetchConstants";

export const fetchOneCardRequest = () => {
  return {
    type: FETCH_ONE_CARD_REQUEST,
  };
};

export const fetchOneCardSuccess = (data) => {
  return {
    type: FETCH_ONE_CARD_SUCCESS,
    payload: data,
  };
};

export const fetchOneCardFailure = (error) => {
  return {
    type: FETCH_ONE_CARD_FAILURE,
    payload: error,
  };
};

export const fetchOneCard = () => {
  return (dispatch) => {
    dispatch(fetchOneCardRequest());
    axios({
      method: "GET",
      url: "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/Ysera",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        useQueryString: true,
      },
    })
      .then((response) => {
        // response.data is the OneCard
        const cardData = response.data;
        dispatch(fetchOneCardSuccess(cardData));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchOneCardFailure(error.message));
      });
  };
};
