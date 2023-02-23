<template>
    <form @submit.prevent="updateProd">
        <div class="mb-3">
            <label for="procduct-name" class="form-label">Tên sản
                phẩm</label>
            <input type="text" :value="productById[0].productName" @input="productById[0].productName = $event.target.value"
                id="procduct-name" class="form-control">
        </div>
        <div class="mb-3">
            <label for="procduct-cat" class="form-label">Danh mục</label>
            <select class="form-select" :value="productById[0].categoryId"
                @change="productById[0].categoryId = $event.target.value" id="procduct-cat"
                aria-label="Default select example">
                <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                    {{ cat.name }}
                </option>
            </select>
        </div>
        <div class="mb-3">
            <label for="procduct-size" class="form-label">Size</label>
            <select class="form-select" :value="productById[0].sizeId" @change="productById[0].sizeId = $event.target.value"
                id="procduct-size" aria-label="Default select example">
                <option v-for="size in sizes" :key="size.id" :value="size.id">
                    {{ size.name }}
                </option>
            </select>
        </div>
        <div class="mb-3">
            <label for="procduct-color" class="form-label">Màu</label>
            <select class="form-select" :value="productById[0].colorId" @change="productById[0].colorId = $event.target.value"
                id="procduct-color" aria-label="Default select example">
                <option v-for="color in colors" :key="color.id" :value="color.id">
                    {{ color.name }}
                </option>
            </select>
        </div>
        <div class="mb-3">
            <label for="procduct-price" class="form-label">Giá sản
                phẩm</label>
            <input type="text" :value="productById[0].price" @input="productById[0].price = $event.target.value"
                id="procduct-price" class="form-control">
        </div>
        <div class="mb-3">
            <label for="procduct-quantity" class="form-label">Số lượng sản
                phẩm</label>
            <input type="text" :value="productById[0].quantity" @input="productById[0].quantity = $event.target.value"
                id="procduct-quantity" class="form-control">
        </div>
        <div class="mb-3">
            <label for="procduct-description" class="form-label">Mô tả sản
                phẩm</label>
            <input type="text" :value="productById[0].description" @input="productById[0].description = $event.target.value"
                id="procduct-description" class="form-control">
        </div>
        <div class="mb-3">
            <label for="formFile" class="form-label">Hình ảnh</label>
            <img :src="this.imgEvn + dataProduct.imagePath" alt="image product" style="height: 120px;padding: 10px;"
                id="image-product">
            <input class="form-control" @change="loadFile" type="file" id="formFile">
        </div>
        <button type="submit" class="btn btn-primary">Sửa</button>
    </form>
</template>

<script>
import { mapActions, mapState } from "vuex"

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
        ...mapState("product", ["productById"]),
        ...mapState("color", ["colors"]),
        ...mapState("size", ["sizes"]),
    },
    methods: {
        ...mapActions("product", ["fetchProductID", "updateProduct"]),
        ...mapActions("category", ["fetchCategory"]),
        ...mapActions("color", ["fetchColor"]),
        ...mapActions("size", ["fetchSize"]),
        onFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            this.dataProduct.imageFile = files[0];
        },
        loadFile(event) {
            let theReader = new FileReader();
            theReader.onload = function () {
                var output = document.getElementById("image-product");
                output.src = theReader.result;
            };
            var files = event.target.files || event.dataTransfer.files;
            if (!files.length)
                return;
            this.dataProduct.imageFile = files[0];
            console.log(this.dataProduct.imagePath);
        },
        async updateProd() {
            let res = await this.updateProduct({
                id: this.productById[0].id,
                categoryId: this.productById[0].categoryId,
                name: this.productById[0].productName,
                description: this.productById[0].description,
                price: this.productById[0].price,
                quantity: this.productById[0].quantity,
                sizeID: this.productById[0].sizeId,
                colorID: this.productById[0].colorId
            })
            console.log(res);
            if(res == 'Update success'){
                alert("Cập nhật thành công")
            }
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
        this.fetchCategory();
        this.fetchColor();
        this.fetchSize();
        this.fetchProductID(this.$route.params.id);
    }
}
</script>

<style>

</style>