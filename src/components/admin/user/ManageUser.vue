<template>
    <div class="container align-items-center mt-2">
        <div class="row mt-3">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">UserName</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <th scope="row">{{ user.userName }}</th>
                        <td>{{ user.fullName }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phoneNumber }}</td>
                        <td>{{ user.address }}</td>
                        <td class="manage">
                            <div class="manage-btn">
                                <button type="button" @click="updateUser(user.id)" class="btn edit" data-bs-toggle="modal"
                                    data-bs-target="#modal-edit">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button type="button" @click="getId(user.id)" class="btn delete" data-bs-toggle="modal"
                                    data-bs-target="#modal-delete">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>

                                <!-- Modal -->
                                <div class="modal fade" id="modal-delete" data-bs-backdrop="static"
                                    data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Xóa danh mục
                                                </h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <form @submit="delUser(user.id)" >
                                                <div class="modal-body">
                                                    <h3 class="danger">Bạn có muốn xóa danh mục</h3>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Đóng</button>
                                                    <button data-bs-dismiss="modal"
                                                        class="btn btn-danger">Xóa</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>

</template>

<script>

import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            
        }
    },
    computed: { ...mapState("user", ["users"]) },
    methods: {
        ...mapActions("user", ["fetchUser", "updateProfile", "deleteUser"]),
        getId(id) {
            this.dataCategory.id = id
        },
        updateUser(id){
            this.$router.push({name: "UpdateUserView", params:{id: id}})
        },
        delUser(id){
            this.deleteUser(id)
        }
    },
    created() {
        this.fetchUser();
    },
}
</script>

<style lang="scss" scoped>
.category-img img {
    height: 100px;
}

.manage {
    width: 50px;
}

.manage-btn {
    display: flex;

    .btn {
        padding: 10px 16px;
        margin: 0 8px;
    }

    .btn:hover {
        background-color: #ccc;
    }
}
</style>
