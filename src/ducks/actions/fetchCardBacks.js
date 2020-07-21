import axios from "axios";

export const fetchCardBacksRequest = () => {
  return {
    type: "FETCH_CARD_BACKS_REQUEST",
  };
};

export const fetchCardBacksSuccess = (data) => {
  return {
    type: "FETCH_CARD_BACKS_SUCCESS",
    payload: {
      data,
    },
  };
};

export const fetchCardBacksFailure = (error) => {
  return {
    type: "FETCH_CARD_BACKS_FAILURE",
    payload: {
      error,
    },
  };
};

export const fetchCardBacks = () => {
  return (dispatch) => {
    dispatch(fetchCardBacksRequest());
    axios({
      method: "GET",
      url: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cardbacks`,
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
        dispatch(fetchCardBacksSuccess(cardData));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchCardBacksFailure(error.message));
      });
  };
};
