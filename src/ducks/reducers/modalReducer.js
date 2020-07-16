const initialState = {
  isOpen: false,
  isOpenFilter: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        isOpen: !state.isOpen,
      };

    case 'CLOSE_MODAL':
      return {
        isOpen: false,
      };

    case 'TOGGLE_FILTER_MODAL':
      return {
        isOpenFilter: !state.isOpenFilter,
      };

    case 'CLOSE_FILTER_MODAL':
      return {
        isOpenFilter: false,
      };

    default:
      return state;
  }
};

export default modalReducer;
