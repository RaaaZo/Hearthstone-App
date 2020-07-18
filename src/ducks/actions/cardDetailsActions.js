export const getCardData = (id) => {
  return {
    type: 'GET_CARD_DATA',
    payload: {
      id,
    },
  };
};

export const toggleCardDetailsModal = () => {
  return {
    type: 'TOGGLE_CARD_DETAILS_MODAL',
  };
};

export const closeCardDetailsModal = () => {
  return {
    type: 'CLOSE_CARD_DETAILS_MODAL',
  };
};
