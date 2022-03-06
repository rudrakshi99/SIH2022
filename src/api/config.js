Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response ? error.response.status : null;

    if (status === 401) {
      // will loop if refreshToken returns 401
      return refreshToken(store).then((_) => {
        error.config.headers["Authorization"] =
          "Bearer " + store.state.auth.token;
        error.config.baseURL = undefined;
        return Axios.request(error.config);
      });
    }
  }
);
