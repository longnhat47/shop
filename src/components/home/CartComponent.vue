<template>
    <div class="container cart-view">
        <h3>Giỏ hàng</h3>
        <table class="table table-striped" v-if="carts.length != 0">
            <thead>
                <tr>
                    <th scope="col">Ảnh</th>
                    <th colspan="2" scope="col">Tên</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Giá</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cart in carts" :key="cart.cartId">
                    <td colspan="1" class="product-img">
                        <img :src="imgEvn"
                            alt="">
                    </td>
                    <td colspan="2">{{ cart.productName }}</td>
                    <td colspan="1"><input type="number" min="1" @change="updateCartFn($event, cart.carId)" :value="cart.quantity"></td>
                    <td colspan="1">{{ cart.toTal.toLocaleString() }}đ</td>
                    <td colspan="1" style="width: 20px;" class="manage">
                        <div class="manage-btn">
                            <form @submit="deleteCartFn(cart.carId)">
                                <button class="btn btn-danger"><i
                                        class="fa-solid fa-trash-can"></i></button>
                            </form>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td colspan="2"></td>
                    <td></td>
                    <td></td>
                    <td>Tổng tiền: {{ totalPrice.toLocaleString() }}đ</td>
                    <td colspan="2" class="manage">
                        <div class="manage-btn">
                            <button @click="addOrder" class="btn btn-success">Mua hàng</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <router-link class="btn btn-block btn-primary" to="/" v-else >Mua hàng</router-link>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            total: 0,
            dataCart: {
                id: '',
                quantity: 0,
            },
            price: 0,
            imgEvn: 'http://localhost:5187'
        }
    },
    computed: {
        ...mapState("cart", ["carts"]),
        ...mapState("user", ["currentUser"]),
        totalPrice() {
            let total = 0;
            this.carts.forEach(c => total += c.toTal)
            return total
        }
    },
    methods: {
        ...mapActions("cart", ["fetchCartUser", "updateCart", "deleteCart"]),
        ...mapActions("order", ["createOder"]),
        loadCart() {
            this.fetchCartUser(this.currentUser.id)
        },
        getId(id) {
            this.dataCart.id = id
        },
        updateCartFn(event, id) {
            const quantity = event.target.value
            this.updateCart({id: id, quantity: quantity})
        }
        ,

        deleteCartFn(id) {
            if (confirm("Bạn có muốn xóa không?")) {
                this.deleteCart(id)
            }
        },
        addOrder() {
            this.carts.forEach(cart => this.createOder({ productId: cart.productId, quantity: cart.quantity }))
            this.carts.forEach(cart => this.deleteCart(cart.carId))
            setTimeout(() => {
                this.$router.push({ path: "/thanh-toan" })
            }, 1000)
        }
    },
    created() {
        this.loadCart();
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