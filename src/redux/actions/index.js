export const getLoginAction = () => {
  return {
    type: "LOGIN",
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
