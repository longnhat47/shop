<template>
    <!-- Product view -->

    <div class="new_arrivals">
        <div class="container">
            <div class="row">
                <div class="col text-center">
                    <div class="section_title new_arrivals_title">
                        <h2>Sản phẩm</h2>
                    </div>
                </div>
            </div>

            <div class="row product-view" v-if="filterProduct.length > 0">
                <!-- Product -->
                <div class="product-item mb-4"  v-for="product in filterProduct" :key="product.id">
                    <router-link :to="{ path: `product-detail/${product.id}` }">
                        <div class="product discount product_filter">
                            <div class="product_image">
                                <img :src="imgEvn + product.imagePath" alt="">
                            </div>
                            <div class="favorite"></div>
                            <div class="product_info">
                                <h6 class="product_name">{{ product.productName }}</h6>
                                <div class="product_price">{{ product.price.toLocaleString() }}<sup>đ</sup></div>
                            </div>
                        </div>
                    </router-link>
                    <div class="blue_button add_to_cart_button"><a @click="addToCart(product)" href="#">Thêm vào giỏ
                            hàng</a></div>
                </div>
            </div>
            <div class="row product-view" v-else>
                <p class="h3">Không có sản phẩm nào</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            imgEvn: 'http://localhost:5187',
            filterSearch: ''
        }
    },
    computed: {
        ...mapState("product", ["products"]),
        ...mapState("user", ["currentUser"]),
        filterProduct() {
            if (this.filterSearch.category) {
                return this.products.filter(p => p.categoryName == this.filterSearch.category)
            }
            if (this.filterSearch.search) {
                return this.products.filter(p => p.productName.toLowerCase().includes(this.filterSearch.search.toLowerCase()) )
                
            }
            return this.products
            
        }
    },
    methods: {
        ...mapActions("product", ["fetchProduct"]),
        ...mapActions("cart", ["fetchCartUser", "createCart"]),
        addToCart(data) {
            let res = this.createCart({ productId: data.id, quantity: 1 })
            console.log(res)

        }
    },
    created() {
        this.fetchProduct();
        this.filterSearch = this.$route.query
        console.log(this.$route.query)
        console.log(this.filterSearch.search)
    },
}
</script>

<style lang="scss" scoped>
.new_arrivals {
    margin-top: 120px;

    .product-view {
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }

    .product-item {
        background-color: #fff;
        height: 324px;

        .product {
            height: 270px;
            border-right: #fff;
        }
    }
}
</style>