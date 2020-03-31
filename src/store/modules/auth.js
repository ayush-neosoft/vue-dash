const state = {
  logged: false,
  subscribed: false,
  user: {}
};

const getters = {
  logged: state => state.logged,
  subscribed: state => state.subscribed,
  user: state => state.user
};

const actions = {
  set_subscribed({ commit }, status) {
    commit("SET_SUBSCRIBED", status);
  },
  set_auth({ commit }, status) {
    commit("SET_AUTH", status);
  },
  set_user({ commit }, user) {
    commit("SET_USER", user);
  }
};

const mutations = {
  SET_AUTH: (state, payload) => (state.logged = payload),
  SET_SUBSCRIBED: (state, payload) => (state.subscribed = payload),
  SET_USER: (state, payload) => (state.user = payload)
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
