export default {
  GET_REVIEW(state, data) {
    state.reviews = data
  },
  POST_REVIEW(state, data) {
    state.reviews.unshift(data)
  },
  PUT_REVIEW(state, data) {
    state.reviews.forEach(element => {
      if(element.id === data.id){
        element.name = data.name;
        return 0;
      }
    });
  },
};
