<template>
    <div class="container align-items-center mt-2">
        <div class="row">
            <div class="col-2">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Thêm danh mục
                </button>

                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Thêm danh mục</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form @submit="addCategory">
                                    <div class="mb-3">
                                        <label for="category-name" class="form-label">Tên danh mục</label>
                                        <input type="text" v-model="dataCategory.name" id="category-name"
                                            class="form-control">
                                    </div>
                                    <button data-bs-dismiss="modal" class="btn btn-primary">Thêm</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-3">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="cate in categories" :key="cate.id">
                        <th scope="row">{{ cate.id }}</th>
                        <td>{{ cate.name }}</td>
                        <td class="manage">
                            <div class="manage-btn">
                                <button type="button" @click="getId(cate.id)" class="btn edit" data-bs-toggle="modal"
                                    data-bs-target="#modal-edit">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                                <button type="button" @click="getId(cate.id)" class="btn delete" data-bs-toggle="modal"
                                    data-bs-target="#modal-delete">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>
                                <!-- Modal -->
                                <div class="modal fade" id="modal-edit" data-bs-backdrop="static"
                                    data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Sửa danh mục
                                                </h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <form @submit="updateCate">
                                                    <div class="mb-3">
                                                        <label for="category-name" class="form-label">Tên danh
                                                            mục</label>
                                                        <input type="text" v-model="dataCategory.name"
                                                            id="category-name" class="form-control">
                                                    </div>
                                                    <button data-bs-dismiss="modal" class="btn btn-primary">Sửa</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>


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
                                            <form @submit="deleteCate" >
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
            dataCategory: {
                name: ''
            }
        }
    },
    computed: { ...mapState("category", ["categories"]) },
    methods: {
        ...mapActions("category", ["fetchCategory", "createCategory", "updateCategory", "deleteCategory"]),
        addCategory() {
            this.createCategory(this.dataCategory);
            this.dataCategory=  {
                id: '',
                name: ''
            }
        },
        getId(id) {
            this.dataCategory.id = id
        },
        updateCate() {
            this.updateCategory(this.dataCategory);
            this.dataCategory=  {
                id: '',
                name: ''
            }
        },
        deleteCate() {
            this.deleteCategory(this.dataCategory);
            this.dataCategory=  {
                id: '',
                name: ''
            }
        }
    },
    created() {
        this.fetchCategory();
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
