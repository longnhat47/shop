export default {
  GET_PRODUCT(state, data) {
    state.products = data
  },
  GET_PRODUCT_ID(state, data) {
    state.productById = data
  },
  /* eslint-disable */
  POST_PRODUCT(state, data) {
    // state.products.unshift(data)
  },
  PUT_PRODUCT(state, data) {
    let index = state.products.indexOf(data.id)
    if(index !== -1) {
      state.products[index] = data
    }
  },
  DELETE_PRODUCT(state, data) {
    state.products.splice(data.id, 1)
  }
};
