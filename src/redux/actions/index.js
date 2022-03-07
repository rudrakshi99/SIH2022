export const getLoginAction = () => {
  return {
    type: "LOGIN",
  };
};

export const getLogoutAction = () => {
  return {
    type: "LOGOUT",
  };
};

export const getSaveTokenAction = (tokens) => {
  return {
    type: "SAVE_TOKEN",
    payload: tokens,
  };
};

export const getSaveProfileAction = (user) => {
  return {
    type: "SAVE_PROFILE",
    payload: user,
  };
};
