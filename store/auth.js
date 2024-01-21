export const state = () => ({
  auth: null,
});

export const mutations = {
  SET_USER(state, user) {
    state.auth = user;
  },
};

export const actions = {
  loginUser({ commit }, user) {
    commit("SET_USER", user);
    // Additional login logic
  },
  logoutUser({ commit }) {
    commit("SET_USER", null);
    // Additional logout logic
  },
};
