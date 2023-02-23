export default {
  GET_SIZE(state, data) {
    state.sizes = data
  },
  POST_SIZE(state, data) {
    state.sizes.unshift(data)
  },
  PUT_SIZE(state, data) {
    let index = state.sizes.indexOf(data.id)
    if(index !== -1) {
      state.sizes[index] = data
    }
  },
  DELETE_SIZE(state, data) {
    state.sizes.splice(data.id, 1)
  }
};
