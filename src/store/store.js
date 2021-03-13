const state = {
  headerName: 'test'
}

const getters = {
  headerName: state => state.headerName
}

const mutations = {
  'SET_NAME' (state, payload) {
    state.headerName = payload
  }
}

const actions = {
  setName ({commit}, payload) {
    commit('SET_NAME', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
