const initialstate = {
  user: {
    data: {
      first_name: "",
    },
  },
  isLoggedIn: false,
};

const authReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
      };

    case "SAVE_PROFILE":
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };

    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default authReducer;
