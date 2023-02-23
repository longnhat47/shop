<template>
    <!-- Slider -->

    <div class="main_slider"
        style="background-image:url('https://scontent.xx.fbcdn.net/v/t1.15752-9/265606131_442636050915269_6585228916591942499_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=CccgDTaqJxIAX-805Vt&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSIVdgPWiSj3fzef-cPBGiO0_7NPNR6eA7tYaHBg3WWbQ&oe=63FF4AAA')">
        <div class="container fill_height">
            <div class="row align-items-center fill_height">
                <div class="col">
                    <div class="main_slider_content">
                        <h6>Bộ sưu tập Thu - Đông 2022</h6>
                        <h1>Black Friday - Sale up to 40%</h1>

                        <div class="blue_button shop_now_button"><router-link to="/products">Mua ngay</router-link></div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Banner -->

    <div class="banner">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="banner_item align-items-center"
                        style="background-image:url('https://scontent.xx.fbcdn.net/v/t1.15752-9/316560661_828077771800519_498021243051184048_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=V4aJwkb7x3IAX9kF67a&_nc_oc=AQlwtfuIzQ5l1a4WzKKV7FYmdjRmun5R5Tsk2ujZX1oKHyQdqYwD6qzVpTcbuUisRilx0vs52uyi2RLmyZTuU21f&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTp0h9kFSNPR2zW5knPkdzyb47sP5ayYDaqvDYAtWUqiQ&oe=63FF5535')">
                        <div class="banner_category">
                            <a @click="goToCategory('Nữ')">Thời trang nữ</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="banner_item align-items-center"
                        style="background-image:url('https://scontent.xx.fbcdn.net/v/t1.15752-9/316642774_655354582803193_425096719571919256_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=aee45a&_nc_ohc=b4KAFjT-KH8AX8bQ-bW&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRnoi6mmOWjeHYDmGD3yDmDbNufUmFFGAAXd8ExUN6DGg&oe=63FF5162')">
                        <div class="banner_category">
                            <a @click="goToCategory('Phụ kiện')">Phụ kiện</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="banner_item align-items-center"
                        style="background-image:url('https://scontent.xx.fbcdn.net/v/t1.15752-9/316493778_904204120744032_6460553020474735028_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=DPBj77lYZtsAX868Hfm&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTfCUQ-NjMUv3D0PluRn04PTw6dsQz9VwGh1TXh1gzcZg&oe=63FF6048')">
                        <div class="banner_category">
                            <a @click="goToCategory('Nam')">Thời trang nam</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- New Arrivals -->

    <div class="new_arrivals">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <div class="section_title new_arrivals_title">
                        <h2>Sản phẩm mới</h2>
                    </div>
                </div>
            </div>

            <div class="row">

                <!-- Product 1 -->

                <div class="product-item mb-4" v-for="product in products" :key="product.id">
                    <router-link :to="{ path: `product-detail/${product.id}`} ">
                        <div class="product discount product_filter">
                            <div class="product_image">
                                <img :src="imgEvn + product.imagePath" alt="">
                            </div>
                            <div class="favorite"></div>
                            <div class="product_info">
                                <h6 class="product_name"><a href="single.html">{{ product.productName }}</a></h6>
                                <div class="product_price">{{ product.price.toLocaleString() }}<sup>đ</sup></div>
                            </div>
                        </div>
                    </router-link>
                    <div  class="blue_button add_to_cart_button"><a @click="addToCart(product)">Thêm vào giỏ hàng</a></div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    data(){
        return {
            imgEvn: 'http://localhost:5187',
        }
    },
    computed: {
        ...mapState("product", ["products"]),
        ...mapState("user", ["currentUser"])
    },
    methods: {
        ...mapActions("product", ["fetchProduct"]),
        ...mapActions("cart", ["fetchCartUser", "createCart"]),
        addToCart(data){
            this.createCart({ productId: data.id, quantity: 1 })
        },
        goToCategory(cate){
            window.location.assign(this.$router.resolve({ name: 'Product', query: {category:cate}} ).href)
            // this.$router.push({ name: 'Product', query: {category:cate}} )
        },
    },
    created() {
        this.fetchProduct();
    },
}
</script>

<style lang="scss" scoped>

</style>