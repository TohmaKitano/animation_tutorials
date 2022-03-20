const initialState = {
  loading: true
}

export const state = () => initialState

export const getters = {
  isLoading: state => state.loading
}

export const mutations = {
  endLoding(state) {
    state.loading = this.getOptions
  }
}

export const actions = {
  endLoding({ commit }) {
    commit('endLoding')
  }
}