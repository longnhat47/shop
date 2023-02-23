export default {
  GET_COLOR(state, data) {
    state.colors = data
  },
  POST_COLOR(state, data) {
    state.colors.unshift(data)
  },
  PUT_COLOR(state, data) {
    let index = state.colors.indexOf(data.id)
    if(index !== -1) {
      state.colors[index] = data
    }
  },
  DELETE_COLOR(state, data) {
    state.colors.splice(data.id, 1)
  }
};
