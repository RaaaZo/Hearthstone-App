import axios from 'axios';
import {
  FETCH_THE_GROUND_TOURNAMENT_SET_REQUEST,
  FETCH_THE_GROUND_TOURNAMENT_SET_SUCCESS,
  FETCH_THE_GROUND_TOURNAMENT_SET_FAILURE,
} from 'ducks/constants/FetchConstants';

export const fetchGrandTournamentSetRequest = () => {
  return {
    type: FETCH_THE_GROUND_TOURNAMENT_SET_REQUEST,
  };
};

export const fetchGrandTournamentSetSuccess = (data) => {
  return {
    type: FETCH_THE_GROUND_TOURNAMENT_SET_SUCCESS,
    payload: data,
  };
};

export const fetchGrandTournamentSetFailure = (error) => {
  return {
    type: FETCH_THE_GROUND_TOURNAMENT_SET_FAILURE,
    payload: error,
  };
};

export const fetchGrandTournamentSet = () => {
  return (dispatch) => {
    dispatch(fetchGrandTournamentSetRequest());
    axios({
      method: 'GET',
      url:
        'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/The Grand Tournament',
      headers: {
        'content-type': 'application/octet-stream',
        'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        useQueryString: true,
      },
      params: {
        locale: 'plPL',
        collectible: '1',
      },
    })
      .then((response) => {
        // response.data is the OneCard
        const cardData = response.data;
        dispatch(fetchGrandTournamentSetSuccess(cardData));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchGrandTournamentSetFailure(error.message));
      });
  };
};
