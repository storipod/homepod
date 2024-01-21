export const state = () => ({
  users: []
});

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  addUsers(state, user) {
    state.users.push(user);
  },
};
