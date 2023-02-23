export default {
  GET_CART(state, data) {
    state.carts = data
  },
  POST_CART(state, data) {
    state.carts.unshift(data)
  },
  PUT_CART(state, data) {
    let index = state.carts.indexOf(data.id)
    if(index !== -1) {
      state.carts[index] = data
    }
  },
  DELETE_CART(state, data) {
    state.carts.splice(data.id, 1)
  }
};
