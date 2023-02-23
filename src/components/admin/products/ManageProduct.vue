<template>
    <div class="container align-items-center mt-2">
        <div class="row">
            <div class="col-2">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Thêm sản phẩm
                </button>

                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Thêm sản phẩm</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form @submit.prevent="addProduct">
                                    <div class="mb-3">
                                        <label for="procduct-name" class="form-label">Tên sản phẩm</label>
                                        <input type="text" v-model="dataProduct.name" id="procduct-name"
                                            class="form-control">
                                    </div>
                                    <div class="mb-3">
                                        <label for="procduct-cat" class="form-label">Danh mục</label>
                                        <select class="form-select" v-model="dataProduct.categoryId" id="procduct-cat"
                                            aria-label="Default select example">
                                            <option selected>Danh mục</option>
                                            <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                                                {{ cat.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="procduct-size" class="form-label">Size</label>
                                        <select class="form-select" v-model="dataProduct.sizeId" id="procduct-size"
                                            aria-label="Default select example">
                                            <option selected>Size</option>
                                            <option v-for="size in sizes" :key="size.id" :value="size.id">
                                                {{ size.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="procduct-color" class="form-label">Màu</label>
                                        <select class="form-select" v-model="dataProduct.colorId" id="procduct-color"
                                            aria-label="Default select example">
                                            <option selected>Màu</option>
                                            <option v-for="color in colors" :key="color.id" :value="color.id">
                                                {{ color.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label for="procduct-price" class="form-label">Giá sản phẩm</label>
                                        <input type="text" v-model="dataProduct.price" id="procduct-price"
                                            class="form-control">
                                    </div>
                                    <div class="mb-3">
                                        <label for="procduct-quantity" class="form-label">Số lượng sản phẩm</label>
                                        <input type="text" v-model="dataProduct.quantity" id="procduct-quantity"
                                            class="form-control">
                                    </div>
                                    <div class="mb-3">
                                        <label for="procduct-description" class="form-label">Mô tả sản phẩm</label>
                                        <input type="text" v-model="dataProduct.description" id="procduct-description"
                                            class="form-control">
                                    </div>
                                    <div class="mb-3">
                                        <label for="formFile" class="form-label">Hình ảnh</label>
                                        <input class="form-control" @change="onFileChange" type="file" id="formFile">
                                    </div>
                                    <button type="submit" class="btn btn-primary">Thêm</button>
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
                        <th scope="col">Ảnh</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Giá</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <th scope="row">{{ product.id }}</th>
                        <td> {{ product.productName }}</td>
                        <td class="product-img">
                            <img :src="imgEvn + product.imagePath"
                                alt="product-image" />
                        </td>
                        <td>{{ product.quantity }}</td>
                        <td>{{ product.price.toLocaleString() }}đ</td>
                        <td class="manage">
                            <div class="manage-btn">    
                                <button @click="updatePro(product.id)" class="btn edit">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>

                                <button type="button" class="btn delete" @click="getId(product.id)"
                                    data-bs-toggle="modal" data-bs-target="#modal-delete">
                                    <i class="fa-solid fa-trash-can"></i>
                                </button>

                                <!-- Modal -->
                                <div class="modal fade" id="modal-delete" data-bs-backdrop="static"
                                    data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                                    aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Xóa sản phẩm
                                                </h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <form @submit="deleteProd">
                                                <div class="modal-body">
                                                    <h3 class="danger">Bạn có muốn xóa sản phẩm</h3>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary"
                                                        data-bs-dismiss="modal">Đóng</button>
                                                    <button class="btn btn-danger">Xóa</button>
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
            dataProduct: {
                id: "",
                name: "",
                categoryId: "",
                description: "",
                price: "",
                quantity: "",
                sizeId: "",
                colorId: "",
                imageFile: ""
            },
            imgEvn: 'http://localhost:5187'
        };
    },
    computed: {
        ...mapState("category", ["categories"]),
        ...mapState("product", ["products"]),
        ...mapState("color", ["colors"]),
        ...mapState("size", ["sizes"]),
    },
    methods: {
        ...mapActions("product", ["fetchProduct", "createProduct", "deleteProduct"]),
        ...mapActions("category", ["fetchCategory"]),
        ...mapActions("color", ["fetchColor"]),
        ...mapActions("size", ["fetchSize"]),
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.dataProduct.imageFile = files[0];
        },
        async addProduct() {
            let res = await this.createProduct(this.dataProduct);
            if(res.status == 200){
                alert("Thêm thành công")
                this.resetForm();
            }
        },
        getId(id) {
            this.dataProduct.id = id;
        },
        updatePro(id){
            window.location.assign(this.$router.resolve({ name: 'UpdateProduct', params: {id: id}} ).href)
        },
        deleteProd() {
            this.deleteProduct(this.dataProduct);
            this.resetForm();
        },
        resetForm() {
            this.dataProduct = {
                id: "",
                name: "",
                categoryId: "",
                description: "",
                price: "",
                quantity: "",
                sizeId: "",
                colorId: "",
            };
        }
    },
    created() {
        this.fetchProduct();
        this.fetchCategory();
        this.fetchColor();
        this.fetchSize();
    },
    unmounted(){
        this.resetForm()
    }
}
</script>

<style lang="scss" scoped>
.product-img img {
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
