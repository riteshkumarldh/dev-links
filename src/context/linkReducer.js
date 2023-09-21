export const initialState = {
  links: [],
  profile: {},
};

const linkReducer = (state, action) => {
  switch (action.type) {
    case "addLink":
      return {
        ...state,
        links: [
          ...state.links,
          {
            id: crypto.randomUUID(),
            plateform: "",
            link: "",
            icon: "",
            color: "",
            textColor: "",
          },
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
              color: action.payload.color,
              textColor: action.payload.textColor,
            };
          }

          return link;
        }),
      };

    case "removeLink":
      return {
        ...state,
        links: state.links.filter((link) => link.id !== action.payload.id),
      };

    case "saveProfile":
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};

export default linkReducer;
