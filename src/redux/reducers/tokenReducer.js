const initialState = {
  token: {
    accessToken: "",
    refreshToken: "",
  },
};

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_TOKEN":
      return {
        ...state,
        token: {
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        },
      };
    default:
      return state;
  }
};

export default tokenReducer;
