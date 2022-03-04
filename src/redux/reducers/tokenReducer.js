const initialState = {
  token: {
    accessToken: "",
    refreshToken: "",
  },
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_TOKEN_ACCESS":
      return {
        ...state,
        token: {
          accessToken: action.payload,
        },
      };
    case "SAVE_TOKEN_REFRESH":
      return {
        ...state,
        token: {
          refreshToken: action.payload,
        },
      };
    default:
      return state;
  }
};

export default tokenReducer;
