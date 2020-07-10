const initialState = {
  isOpen: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        isOpen: !state.isOpen,
      };

    case "CLOSE_MODAL":
      return {
        isOpen: false,
      };

    default:
      return state;
  }
};

export default modalReducer;
