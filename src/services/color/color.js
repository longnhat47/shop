import BaseService from "../base";

class colorService extends BaseService {
    get entity() {
        return "Color"
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
            console.log(data)
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

}

export default new colorService();
