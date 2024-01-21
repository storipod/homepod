export const state = () => ({
  stories: [],
});

export const mutations = {
  setStories(state, stories) {
    state.stories = stories;
  },
  addStories(state, stori) {
    state.stories.push(stori);
  },
};
