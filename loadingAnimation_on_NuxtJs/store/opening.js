const initialState = {
  loading: true
}

export const state = () => initialState

export const getters = {
  isLoading: state => state.loading
}

export const mutations = {
  endLoding(state) {
    state.loading = false
  }
}

export const actions = {
  endLoding({ commit }) {
    commit('endLoding')
  }
}