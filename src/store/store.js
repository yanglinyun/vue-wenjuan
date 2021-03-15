const state = {
  headerName: 'test',
  isLogin: true,
  itemStatus: 'palaze'
}

const getters = {
  headerName: state => state.headerName,
  isLogin: state => state.isLogin,
  itemStatus: state => state.itemStatus
}

const mutations = {
  'SET_NAME' (state, payload) {
    state.headerName = payload
  },
  'SET_ISLOGIN' (state, payload) {
    state.isLogin = payload
  },
  'SET_ITEMSTATUS' (state, payload) {
    state.itemStatus = payload
  }
}

const actions = {
  setName ({commit}, payload) {
    commit('SET_NAME', payload)
  },
  setIsLogin ({commit}, payload) {
    commit('SET_ISLOGIN', payload)
  },
  setItemStatus ({commit}, payload) {
    commit('SET_ITEMSTATUS', payload)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
