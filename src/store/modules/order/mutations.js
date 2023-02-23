export default {
  GET_ODER(state, data) {
    state.oders = data
  },
  POST_ODER(state, data) {
    state.oders.unshift(data)
  },
  PUT_ODER(state, data) {
    let index = state.oders.indexOf(data.id)
    if(index !== -1) {
      state.oders[index] = data
    }
  },
  DELETE_ODER(state, data) {
    let index = state.oders.indexOf(data.id)
    if(index !== -1) {
      state.oders.splice(index, 1)
    }
  }
};
