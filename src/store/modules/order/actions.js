import orderService from "@/services/order/order"


export default {
    async fetchOder({ commit }) {
        const res = await orderService.getAll()
        commit("GET_ODER", res.data)
        return res.data
    },
    async fetchOderId({ commit }, data) {
        const res = await orderService.get(data)
        commit("GET_ODER", res.data)
        return res.data
    },
    /* eslint-disable */
    async fetchSolded({ commit }) {
        const res = await orderService.getSolded()
        // commit("GET_ODER", res.data)
        return res
    },
    async createOder({ commit }, data) {
        const res = await orderService.create(data)
        commit("POST_ODER", res.data)
        return res.data
    },
    async updateOder({ commit }, data) {
        const res = await orderService.update(data)
        commit("PUT_ODER", res.data)
        return res.data
    },
    async deleteOder({ commit }, data) {
        const res = await orderService.delete(data.id)
        commit("DELETE_ODER", res.data)
        return res.data
    }
};
