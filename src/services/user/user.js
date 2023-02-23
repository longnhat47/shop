import BaseService from "../base";

class UserService extends BaseService {
    get entity() {
        return "User"
    }

    async getUsers() {
        try {
            return await this.request().get(`${this.entity}`)
        } catch (e) {
            return e.response
        }
    }

    async login(data) {
        try {
            return await this.request().post(`${this.entity}/Login`, data)
        } catch (e) {
            return e.response
        }
    }

    async registerCustomer(data) {
        try {
            return await this.request().post(`${this.entity}/RegisterCustomer`, data)
        } catch (e) {
            return e.response
        }
    }

    async registerSeller(data) {
        try {
            return await this.request().post(`${this.entity}/RegisterSeller`, data)
        } catch (e) {
            return e.response
        }
    }
    
    async getProfile(id) {
        try {
            return await this.request().get(`${this.entity}/${id}`)
        } catch (e) {
            return e.response
        }
    }

    async delete(id) {
        try {
            return await this.request().delete(`${this.entity}/${id}`)
        } catch (e) {
            return e.response
        }
    }

    async updateProfile(data) {
        try {
            return await this.request().put(`${this.entity}/Update/?id=${data.id}`, data)
        } catch (e) {
            return e.response
        }
    }

    async updatePassword(data) {
        try {
            return await this.request().put(`${this.entity}/ChangePassword/?id=${data.id}`, data)
        } catch (e) {
            return e.response
        }
    }

    // async emailVerify(token) {
    //     try {
    //         return await this.request().get(`${this.entity}/email-verify?token=${token}`)
    //     } catch (e) {
    //         return e.response
    //     }
    // }

    // async getProfiles() {
    //     try {
    //         return await this.request().get(`${this.entity}/profiles`)
    //     } catch (e) {
    //         return e.response
    //     }
    // }


    // async getProfileByEmail(email) {
    //     try {
    //         return await this.request().post(`${this.entity}/profiles/profile-by-email`, { "email": email })
    //     } catch (e) {
    //         return e.response
    //     }
    // }

    // async changeAvatar(profileId, data) {
    //     try {
    //         return await this.request().patch(`${this.entity}/profiles/${profileId}/change_avatar/`, data)
    //     } catch (e) {
    //         return e.response
    //     }
    // }

    // async createProfile(data) {
    //     try {
    //         return await this.request().post(`${this.entity}/profiles`, data)
    //     } catch (e) {
    //         return e.response
    //     }
    // }

    // async updateProfile(data) {
    //     try {
    //         return await this.request().patch(`${this.entity}/profiles/${data['id']}/`, data)
    //     } catch (e) {
    //         return e.response
    //     }
    // }

    // async deleteProfile(id) {
    //     try {
    //         return await this.request().delete(`${this.entity}/profiles/${id}`)
    //     } catch (e) {
    //         return e.response;
    //     }
    // }
}

export default new UserService();
