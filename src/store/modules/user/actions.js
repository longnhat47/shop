import userService from "@/services/user/user"


export default {
  async fetchUser ({ commit }) {
    const user = await userService.getUsers()
    commit("GET_ALL_USER", user.data)
    return user.data
  },
  async loginUser ({ commit }, data) {
    const res = await userService.login(data)
    commit("SET_USER", res.data)
    return res
  },
  /* eslint-disable */
  async registerCustomer ({ commit }, data) {
    const res = await userService.registerCustomer(data)
    return res
  },
  /* eslint-disable */
  async registerSeller ({ commit }, data) {
    const res = await userService.registerSeller(data)
    return res
  },
  resetUser({ commit }) {
    commit("RESET_USER")
    return 0
  },
  // async fetchProfileByEmail({ commit }, email){
  //   const profile = await userService.getProfileByEmail(email)
  //   commit("SET_PROFILE", profile.data)
  //   return profile.data
  // },
  async fetchProfile({ commit }, id){
    const profile = await userService.getProfile(id)
    commit("SET_PROFILE", profile.data)
    return profile.data
  },
  async updateProfile({ commit }, data){
    const profile = await userService.updateProfile(data)
    commit("SET_PROFILE", profile.data)
    return profile.data
  },
  async updatePassword({ commit }, data){
    const res = await userService.updatePassword(data)
    commit("SET_PROFILE")
    return profile.data
  },
  resetProfile({ commit }) {
    commit("RESET_PROFILE")
    return 0
  },
  async deleteUser({ commit }, data){
    const res = await userService.delete(data)
    commit("SET_PROFILE")
    return profile.data
  },
};
