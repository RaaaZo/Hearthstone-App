import axios from 'axios';
import {
  FETCH_THE_LEAGUE_OF_EXPLORERS_SET_REQUEST,
  FETCH_THE_LEAGUE_OF_EXPLORERS_SET_SUCCESS,
  FETCH_THE_LEAGUE_OF_EXPLORERS_SET_FAILURE,
} from 'ducks/constants/FetchConstants';

export const fetchLeagueOfExplorersSetRequest = () => {
  return {
    type: FETCH_THE_LEAGUE_OF_EXPLORERS_SET_REQUEST,
  };
};

export const fetchLeagueOfExplorersSetSuccess = (data) => {
  return {
    type: FETCH_THE_LEAGUE_OF_EXPLORERS_SET_SUCCESS,
    payload: data,
  };
};

export const fetchLeagueOfExplorersSetFailure = (error) => {
  return {
    type: FETCH_THE_LEAGUE_OF_EXPLORERS_SET_FAILURE,
    payload: error,
  };
};

export const fetchLeagueOfExplorersSet = () => {
  return (dispatch) => {
    dispatch(fetchLeagueOfExplorersSetRequest());
    axios({
      method: 'GET',
      url:
        'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/The League of Explorers',
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
        dispatch(fetchLeagueOfExplorersSetSuccess(cardData));
      })
      .catch((error) => {
        // error.message is the error message
        dispatch(fetchLeagueOfExplorersSetFailure(error.message));
      });
  };
};
