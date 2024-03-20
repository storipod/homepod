
export const namespaced = true

export const state = () => ({
  auth: null,
  isLoggedIn: false,
  events: [],
  members: [],
  publications: [],
  subscriptions: []

})

export const mutations = {
  setAuthUser: (state, item) => {
    state.auth = item
    if (state.auth !== null) {
      state.isLoggedIn = true
    }
  },
  resetState: (state) => {
    state.auth = null
    state.isLoggedIn = false
    state.events = []
    state.members = []
    state.publications = []
    state.subscriptions = []
  },
  setSubscriptions: (state, item) => {
    state.subscriptions = item
  },
  setPublications: (state, item) => {
    state.publications = item
  },
  setMembers: (state, item) => {
    state.members = item
  },
  setEvents: (state, item) => {
    state.events = item
  }
}

export const getters = {
  getAuthToken: (state) => {
    if(state.auth !== null) {
      return state.auth.token.accessToken
    }
  },
  getEvents: (state) => {
    return state.events
  },
  getMembers: (state) => {
    return state.members
  },
  getPublications: (state) => {
    return state.publications
  },
  getSubscriptions: (state) => {
    return state.subscriptions
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.session.user) {
      commit('user', req.session.user)
    }
  }
}
