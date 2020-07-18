const initialState = {
  isOpen: false,
  isOpenCardSetFilter: false,
  isOpenClassFilter: false,
  isOpenDetailsModal: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: false,
      };

    case 'TOGGLE_FILTER_MODAL':
      return {
        ...state,
        isOpenCardSetFilter: !state.isOpenCardSetFilter,
      };

    case 'CLOSE_FILTER_MODAL':
      return {
        ...state,
        isOpenCardSetFilter: false,
        isOpenClassFilter: false,
      };

    case 'TOGGLE_CLASS_MODAL':
      return {
        ...state,
        isOpenClassFilter: !state.isOpenClassFilter,
      };

    case 'TOGGLE_CARD_DETAILS_MODAL':
      return {
        isOpenDetailsModal: !state.isOpenDetailsModal,
      };

    case 'CLOSE_CARD_DETAILS_MODAL':
      return {
        isOpenDetailsModal: false,
      };

    default:
      return state;
  }
};

export default modalReducer;
