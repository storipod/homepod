export default class StoriApiService {
  constructor($axios) {
    this.$axios = $axios;
  }

  getAllStories(config = {}) {
    return this.$axios.$get(`/story?sortBy`, config);
  }

  getStoriesById(id, config = {}) {
    return this.$axios.$get(`/story/${id}`, config);
  }

  getStorySummary(config = {}) {
    return this.$axios.$get(`/story/summary`, config);
  }

  getEngagementSummary(config = {}) {
    return this.$axios.$get(`/story/engagement-summary`, config);
  }
}
