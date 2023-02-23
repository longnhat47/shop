import cartService from "@/services/cart/cart"


export default {
    async fetchCart({ commit }) {
        const res = await cartService.getAll()
        console.log(res)
        commit("GET_CART", res.data)
        return res.data
    },
    async fetchCartUser({ commit }, data) {
        const res = await cartService.get(data)
        console.log(res)
        commit("GET_CART", res.data)
        return res.data
    },
    async createCart({ commit }, data) {
        const res = await cartService.create(data)
        commit("POST_CART", res.data)
        return res.data
    },
    async updateCart({ commit }, data) {
        const res = await cartService.update(data)
        commit("PUT_CART", res.data)
        return res.data
    },
    async deleteCart({ commit }, data) {
        const res = await cartService.delete(data)
        commit("DELETE_CART", res.data)
        return res.data
    }
};
