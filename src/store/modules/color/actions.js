import colorService from "@/services/color/color"


export default {
    async fetchColor({ commit }) {
        const res = await colorService.getAll()
        commit("GET_COLOR", res.data)
        return res.data
    },
    async createColor({ commit }, data) {
        const res = await colorService.create(data)
        commit("POST_COLOR", res.data)
        return res.data
    },
    async updateColor({ commit }, data) {
        const res = await colorService.update(data)
        commit("PUT_COLOR", res.data)
        return res.data
    },
    async deleteColor({ commit }, data) {
        const res = await colorService.delete(data.id)
        commit("DELETE_COLOR", res.data)
        return res.data
    }
};
