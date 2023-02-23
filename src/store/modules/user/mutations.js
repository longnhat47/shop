export default {
  GET_ALL_USER(state, data){
    state.users = data
  },
  SET_USER(state, data) {
    state.currentUser.username = data.userName
    state.currentUser.id = data.id
    state.currentUser.role = data.roles
    state.currentUser.tokens = data.token
  },
  RESET_USER(state) {
    state.currentUser.username = ''
    state.currentUser.id = ''
    state.currentUser.role = ''
    state.currentUser.tokens = ''
  },
  SET_PROFILE(state, profile) {
    state.profile = profile
  },
  SET_PASSWORD(state) {
    state.profile
  },
  RESET_PROFILE(state) {
    state.profile = null
  },
};
