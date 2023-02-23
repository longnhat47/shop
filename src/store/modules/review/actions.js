import reviewService from "@/services/review/review"


export default {
    async fetchReview({ commit }) {
        const res = await reviewService.getAll()
        commit("GET_REVIEW", res.data)
        return res.data
    },
    async createReview({ commit }, data) {
        const res = await reviewService.create(data)
        commit("POST_REVIEW", res.data)
        console.log(res.status)
        return res
    },
    async updateReview({ commit }, data) {
        console.log(data)
        const res = await reviewService.update(data)
        commit("PUT_REVIEW", res.data)
        console.log(res)
        return res
    },
    /* eslint-disable */
    async deleteReview({ commit }, data) {
        const res = await reviewService.delete(data.id)
        // commit("DELETE_REVIEW", data)
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
