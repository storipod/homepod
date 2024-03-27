export default class StoriApiService {
  constructor($axios) {
    this.$axios = $axios;
  }

  getAllStories(filter, config = {}) {
    return this.$axios.$get(`story?page=1&limit=10&sortBy=${filter}`, config);
  }

  getStoriesById(id, config = {}) {
    return this.$axios.$get(`/story/${id}`, config);
  }
}
