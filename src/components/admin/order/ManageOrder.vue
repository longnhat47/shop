<template>
    <div class="container align-items-center mt-2">
        
        <div class="row mt-3">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Địa chỉ</th>
                        <th scope="col">Tổng tiền</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="oder in oders" :key="oder.id">
                        <th scope="row">{{ oder.id }}</th>
                        <td>{{ oder.fullName }}</td>
                        <td>{{ oder.phoneNumber }}</td>
                        <td>{{ oder.address }}</td>
                        <td>{{ oder.totalPrice.toLocaleString() }}đ</td>
                        <td class="manage">
                            <div class="manage-btn">
                                <!-- <button type="button" @click="getId(oder.id)" class="btn btn-primary edit">
                                    Xác nhận
                                </button> -->
                                <button type="button" @click="getId(oder.id)" class="btn delete" data-bs-toggle="modal"
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
                                            <form @submit.prevent="delOder" >
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
            dataOder : {
                id : ''
            }
        }
    },
    computed: { ...mapState("order", ["oders"]) },
    methods: {
        ...mapActions("order", ["fetchOder", "updateOder", "deleteOder"]),
        getId(id){
            this.dataOder.id = id
            console.log(this.dataOder)
        },
        delOder(){
            this.deleteOder(this.dataOder)
        }
    },
    created() {
        this.fetchOder();
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
