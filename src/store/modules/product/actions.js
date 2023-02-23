import productService from "@/services/product/product"
import axios from "axios";

export default {
    async fetchProduct({ commit }) {
        const res = await productService.getAll()
        commit("GET_PRODUCT", res.data)
        return res
    },
    async fetchProductID({ commit }, data) {
        const res = await productService.get(data)
        console.log(res)
        commit("GET_PRODUCT_ID", res.data)
        return res
    },
    async createProduct({ commit }, data) {
        const res = await productService.create(data)
        var form = new FormData();
        var file = data.imageFile;
        var id = res.data;
        form.append('id', id);
        form.append('imageFile', file);
        const store = require("@/store");
        const token = store ? store.default.state.user.currentUser.tokens : null;
        axios.post(`http://localhost:5187/api/Product/${id}/images`, form, {
            headers:{ 
            'Authorization' : `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',}
        }).then(res => console.log(res));
        commit("POST_PRODUCT", res.data)
        return res
    },
    async updateProduct({ commit }, data) {
        const res = await productService.update(data)
        commit("PUT_PRODUCT", res.data)
        return res.data
    },
    async deleteProduct({ commit }, data) {
        const res = await productService.delete(data.id)
        commit("DELETE_PRODUCT", res.data)
        return res
    }
};
