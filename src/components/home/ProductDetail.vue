<template>
    <div class="container product">
        <div class="row product-detail">
            <div class="col-lg-5 col-md-4 col-sm-12 product-img">
                <!-- <img :src="products[0].imagePath" alt="image-product"> -->
                <img :src="imgEvn + products[0].imagePath" alt="image-product">
            </div>
            <div class="col-lg-7 col-md-8 col-sm-12 product-des">
                <div class="row">
                    <h2 class="product-name"> {{ products[0].productName }}
                    </h2>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h3>{{ products[0].price.toLocaleString() }}đ</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                        <p>Size: {{ products[0].sizeName }}</p>
                    </div>
                    <!-- <div class="col-10">
                        <ul class="row">
                            <li class="size col actived">
                                <button class="btn">S</button><i class="fa-solid fa-square-check"></i>
                            </li>
                            <li class="size col disabled">
                                <button class="btn">M</button>
                            </li>
                            <li class="size col">
                                <button class="btn">L</button>
                            </li>
                        </ul>
                    </div> -->
                </div>
                <div class="row mt-2">
                    <div class="col-2">
                        <p>Màu: {{ products[0].colorName }}</p>
                    </div>
                    <!-- <div class="col-10">
                        <ul class="row">
                            <li class="color col">
                                <button class="btn">Trắng</button>
                            </li>
                            <li class="color col">
                                <button class="btn">Đen</button>
                            </li>
                            <li class="color col">
                                <button class="btn">Đỏ</button>
                            </li>
                        </ul>
                    </div> -->
                </div>
                <div class="row mt-4">
                    <div class="col-2">
                        <p>Số lượng:</p>
                    </div>
                    <div class="quantity col-10">
                        <div class="row">
                            <div class="col-4">
                                <input v-model="quantity" type="number" min="1">
                            </div>
                            <div class="col-8">
                                Số lượng: {{ products[0].quantity }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col"><a @click="addToCart(products[0])" href="#" class="btn btn-primary">Thêm vào giỏ hàng</a></div>
                    <div class="col"><a href="#" class="btn btn-primary">Mua ngay</a></div>
                </div>
            </div>
        </div>
        <div class="row owner mt-3">
            <!-- <img class="img-seller col" :src="products.user.img_profile" alt=""> -->
            <p class="col">Shop name</p> 
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            quantity: 1,
            imgEvn: 'http://localhost:5187'
        }
    },
    computed: {
        ...mapState("product", ["products"]),


    },
    methods: {
        ...mapActions("product", ["fetchProductID"]),
        ...mapActions("cart", ["createCart"]),
        addToCart(data){
            this.createCart({ productId: data.id, quantity: this.quantity})
            this.$router.push({ path: "/cart-detail" })
        }
    },
    created() {
        console.log(this.$router.currentRoute._value.params.id)
        // console.log(this.fetchProductID(this.$router.currentRoute._value.params.id))
        // this.fetchProductID(this.$router.currentRoute._value.params.id)
    },
    mounted() {
    }
}
</script>

<style scoped lang="scss">
.product {
    margin-top: 190px;
    min-height: 580px;

    .product-detail {
        background-color: #fff;
        padding: 12px 6px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 10px;

        img {
            max-height: 454px;
            width: 100%;
        }

        .product-des {

            p {
                color: #000;
            }

            .product-name {
                white-space: pre;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .size,
            .color {
                margin-left: 8px;
                min-height: 32px;
                max-width: 90px;
                font-size: 24px;
                background-color: #fff;
                box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
                position: relative;

            }

            .size i,
            .color i {
                position: absolute;
                top: 0;
                right: 0;
            }

            .size.disabled,
            .color.disabled {
                background-color: #b1c0cd;
                cursor: none;
                border: 2px solid #6d767e;
            }

            .size.actived,
            .color.actived {
                cursor: pointer;
                border: 2px solid #e33e33;
                background-color: rgb(240, 208, 166);
            }

            .quantity button {
                width: 40px;
            }

            .quantity input {
                width: 60px;
            }
        }
    }

    .owner {
        background-color: #fff;
        padding: 12px 6px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 10px;

        .img-seller {
            height: 50px;
            max-width: 90px;
            border-radius: 50%;
        }
    }
}
</style>