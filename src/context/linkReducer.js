export const initialState = {
  links: [],
};

const linkReducer = (state, action) => {
  switch (action.type) {
    case "addLinks":
      return;
    default:
      return state;
  }
};

export default linkReducer;
