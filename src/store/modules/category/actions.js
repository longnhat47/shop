import categoryService from "@/services/category/category"


export default {
    async fetchCategory({ commit }) {
        const res = await categoryService.getAll()
        commit("GET_CATEGORY", res.data)
        return res.data
    },
    async createCategory({ commit }, data) {
        const res = await categoryService.create(data)
        commit("POST_CATEGORY", res.data)
        console.log(res.status)
        return res
    },
    async updateCategory({ commit }, data) {
        console.log(data)
        const res = await categoryService.update(data)
        commit("PUT_CATEGORY", res.data)
        console.log(res)
        return res
    },
    /* eslint-disable */
    async deleteCategory({ commit }, data) {
        const res = await categoryService.delete(data.id)
        // commit("DELETE_CATEGORY", data)
        return res
    }
    //   async fetchProfile({ commit }, id){
    //     const profile = await userService.getProfile(id)
    //     commit("SET_PROFILE", profile.data)
    //     return profile.data
    //   },
    //   resetProfile({ commit }) {
    //     commit("RESET_PROFILE")
    //     return 0
    //   },
};
