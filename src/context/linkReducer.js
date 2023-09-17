export const initialState = {
  links: [],
};

const linkReducer = (state, action) => {
  switch (action.type) {
    case "addLink":
      return {
        ...state,
        links: [
          ...state.links,
          { plateform: "", id: crypto.randomUUID(), link: "" },
        ],
      };

    case "editLink":
      return {
        ...state,
        links: state.links.map((link) => {
          if (link.id === action.payload.linkId) {
            return {
              ...link,
              plateform: action.payload.plateform,
            };
          }

          return link;
        }),
      };

    default:
      return state;
  }
};

export default linkReducer;
