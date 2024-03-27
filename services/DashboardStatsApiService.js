export default class DashboardStatsApiService {
  constructor($axios) {
    this.$axios = $axios;
  }

  activeUserSummary(config = {}){
    return this.$axios.$get(`/active-users-summary`, config);
  }

  signUpSummary(config = {}){
    return this.$axios.$get(`/user/signup-summary`, config);
  }

  storyEngagementSummary(config = {}){
    return this.$axios.$get(`/user/engagements`, config);
  }

  storySummary(config = {}){
    return this.$axios.$get(`/story/summary`, config);
  }
}
