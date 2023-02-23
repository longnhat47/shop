import sizeService from "@/services/size/size"


export default {
    async fetchSize({ commit }) {
        const res = await sizeService.getAll()
        commit("GET_SIZE", res.data)
        return res.data
    },
    async createSize({ commit }, data) {
        const res = await sizeService.create(data)
        commit("POST_SIZE", res.data)
        return res.data
    },
    async updateSize({ commit }, data) {
        const res = await sizeService.update(data)
        commit("PUT_SIZE", res.data)
        return res.data
    },
    async deleteSize({ commit }, data) {
        const res = await sizeService.delete(data.id)
        commit("DELETE_SIZE", res.data)
        return res.data
    }
};
