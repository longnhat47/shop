<template>
    <div class="container cart-view">
        <h3>Thống kê</h3>
        <p>Số lượng sản phẩm trong shop: {{ products.length }}</p>
        <p>Tổng đơn hàng: {{ oders.length }}</p>
        <p>Doanh số: {{ quantityPrice.toLocaleString() }}đ</p>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            solded: 0,
            imgEvn: 'http://localhost:5187'
        }
    },
    computed: {
        ...mapState("cart", ["carts"]),
        ...mapState("order", ["oders"]),
        ...mapState("product", ["products"]),
        ...mapState("user", ["currentUser"]),
        quantityPrice(){
            let price = 0
            this.oders.forEach(o => price += o.totalPrice)
            return price
        }
    },
    methods: {
        ...mapActions("cart", ["fetchCart"]),
        ...mapActions("order", ["fetchOder", "fetchSolded"]),
        ...mapActions("product", ["fetchProduct"]),
    },
    created() {
        this.fetchOder()
        this.fetchProduct()
    }
}
</script>

<style lang="scss" scoped>
.cart-view {
    margin-top: 160px;

    .product-img img {
        height: 60px;
    }
}
</style>