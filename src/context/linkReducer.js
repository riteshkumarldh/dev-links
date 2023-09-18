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
          { plateform: "", id: crypto.randomUUID(), link: "", icon: "" },
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
              icon: action.payload.icon,
              link: action.payload.link,
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
