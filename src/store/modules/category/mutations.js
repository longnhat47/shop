export default {
  GET_CATEGORY(state, data) {
    state.categories = data
  },
  POST_CATEGORY(state, data) {
    state.categories.unshift(data)
  },
  PUT_CATEGORY(state, data) {
    state.categories.forEach(element => {
      if(element.id === data.id){
        element.name = data.name;
        return 0;
      }
    });
  },
  // DELETE_CATEGORY(state, data) {
  //   console.log(data)
  //   const element = state.categories.find(element => element.id === data.id)
  //   if(element){
  //     delete state.categories[state.categories.indexOf(element.name)]
  //   }
  // }
};
