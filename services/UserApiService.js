export default class UserApiService {
  constructor($axios) {
    this.$axios = $axios;
  }

  login(data) {
    return this.$axios.$post(`/auth/login`, data);
    // return this.$axios.$post(`auth/token/`, data);
  }

  getUserById(id, config = {}){
    return this.$axios.$get(`/user/${id}`, config);
  }

  getActiveUsers(config = {}){
    return this.$axios.$get(`/user/active-users-summary`, config);
  }

  getSignUpSummary(config = {}){
    return this.$axios.$get(`/user/signup-summary`, config);
  }

  getTopUsers(config = {}){
    return this.$axios.$get(`/user/top-users`, config);
  }

  getUsersProfile(config = {}){
    return this.$axios.$get(`/user/profile`, config);
  }

  getAllUsers(config = {}){
    return this.$axios.$get(`/user/all`, config);
  }

  fetchUserEngagements(config = {}){
    return this.$axios.$get(`/user/engagements`, config);
  }

  fetchUserSignups(config = {}){
    return this.$axios.$get(`/user/signups`, config);
  }
}
