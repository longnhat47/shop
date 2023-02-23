import BaseService from "../base";

class productService extends BaseService {
    get entity() {
        return "Product"
    }

    async getAll() {
        try {
            return await this.request().get(`${this.entity}/product`)
        } catch (e) {
            return e.response
        }
    }

    async get(id) {
        try {
            return await this.request().get(`${this.entity}/${id}`)
        } catch (e) {
            return e.response
        }
    }

    async create(data) {
        try {
            return await this.request().post(`${this.entity}`, data)
        } catch (e) {
            return e.response
        }
    }

    async addImage(id,data) {
        try {
            return await this.request().post(`${this.entity}/${id}/images`, data)
        } catch (e) {
            return e.response
        }
    }

    async update(data) {
        try {
            return await this.request().put(`${this.entity}/${data['id']}`, data)
        } catch (e) {
            return e.response
        }
    }

    async delete(id) {
        try {
            return await this.request().delete(`${this.entity}/${id}`)
        } catch (e) {
            return e.response;
        }
    }

    async getDetail(id) {
        try {
            return await this.request().get(`${this.entity}/product-details/${id}`)
        } catch (e) {
            return e.response
        }
    }


    // async createDetail(data) {
    //     try {
    //         return await this.request().post(`${this.entity}/product-details/`, data)
    //     } catch (e) {
    //         return e.response
    //     }
    // }

    // async updateDetails(data) {
    //     try {
    //         return await this.request().patch(`${this.entity}/product-details/${data['id']}`, data)
    //     } catch (e) {
    //         return e.response
    //     }
    // }

    // async deleteDetails(id) {
    //     try {
    //         return await this.request().delete(`${this.entity}/product-details/${id}`)
    //     } catch (e) {
    //         return e.response;
    //     }
    // }
}

export default new productService();
