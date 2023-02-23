import BaseService from "../base";

class reviewService extends BaseService {
    get entity() {
        return "Review"
    }

    async getAll() {
        try {
            return await this.request().get(`${this.entity}`)
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

    async update(data) {
        try {
            return await this.request().patch(`${this.entity}/${data['id']}`, data)
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

    // async getAllDetails() {
    //     try {
    //         return await this.request().get(`${this.entity}/donation-details`)
    //     } catch (e) {
    //         return e.response
    //     }
    // }

    async getDetail(id) {
        try {
            return await this.request().get(`${this.entity}/product-details/${id}`)
        } catch (e) {
            return e.response
        }
    }

}

export default new reviewService();
