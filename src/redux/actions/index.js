export const getLoginAction = () => {
  return {
    type: "LOGIN",
  };
};

export const getSaveTokenActionAccess = (accessToken) => {
  return {
    type: "SAVE_TOKEN_ACCESS",
    payload: accessToken,
  };
};

export const getSaveTokenActionRefresh = (accessToken) => {
  return {
    type: "SAVE_TOKEN_REFRESH",
    payload: accessToken,
  };
};

export const getSaveProfileAction = (user) => {
  return {
    type: "SAVE_PROFILE",
    payload: user,
  };
};
