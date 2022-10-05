export const getIsAuth = (state) => Boolean(state.auth.idToken);
export const getMustCurUser = (state) =>
  state.auth.idToken && !state.auth.user.email;
export const getUserEmail = (state) => state.auth.user.email;
export const getOutError = (state) => state.auth.error;
