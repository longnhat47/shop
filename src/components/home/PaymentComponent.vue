<template>
    <div class="container cart-view">
        <h3>Thanh toán</h3>
        <form class="col-auto" v-if="oderFilter.length != 0" @submit="updateOderFn">
            <div class="col-auto">
                <label for="full-name" class="form-label">Tên: {{ oders[0].fullName }}</label>
                <!-- <input type="text" class="form-control" id="full-name" placeholder="Họ tên"> -->
            </div>
            <div class="col-auto">
                <label for="phone" class="form-label">Số điện thoại: {{ oders[0].phoneNumber }}</label>
                <!-- <input type="text" class="form-control" id="phone" placeholder="Số điện thoại"> -->
            </div>
            <div class="col-auto">
                <label for="address" class="form-label">Địa chỉ nhận hàng: {{ oders[0].address }}</label>
                <!-- <input type="text" class="form-control" id="address" placeholder="Địa chỉ"> -->
            </div>
            <div class="col-auto mb-3">
                <label for="pay-option" class="form-label">Hình thức thanh toán:</label>
                <select class="form-control" name="" id="pay-option">
                    <option value="">Thanh toán khi nhận hàng</option>
                    <option value="" disabled>Zalo Pay</option>
                    <option value="" disabled>Momo</option>
                </select>
            </div>
            <div class="col-auto">
                <button class="btn btn-primary mb-3">Thanh toán</button>
            </div>
        </form>
        <table class="table table-striped" v-if="oderFilter.length != 0">
            <thead>
                <tr>
                    <th scope="col">Ảnh</th>
                    <th colspan="2" scope="col">Tên</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Giá</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in oderFilter" :key="order.id">
                    <td colspan="1" class="product-img">
                        <img src="https://www.shutterstock.com/image-vector/set-man-clothes-icons-thin-260nw-551698465.jpg"
                            alt="">
                    </td>
                    <td colspan="2">{{ order.product }}</td>
                    <td colspan="1">{{ order.quantity }}</td>
                    <td colspan="1">{{ order.price }}</td>
                </tr>
                <tr>
                    <td colspan="2"></td>
                    <td></td>
                    <td></td>
                    <td>Tổng tiền: {{ totalPrice }}</td>
                </tr>
            </tbody>
        </table>
        <router-link class="btn btn-block btn-primary" to="/" v-else >Mua hàng</router-link>
    </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
    data() {
        return {
            total: 0,
            dataOrder: ''
        }
    },
    computed: {
        ...mapState("cart", ["carts"]),
        ...mapState("order", ["oders"]),
        ...mapGetters("order", ["getOrders"]),
        ...mapState("user", ["currentUser"]),
        totalPrice() {
            let total = 0;
            // this.carts.forEach(c => total += c.toTal)
            this.oderFilter.forEach(c => total += c.totalPrice)
            return total
        },
        oderFilter() {
            const a = this.oders.filter(o => !o.status)
            return a
        }

    },
    methods: {
        ...mapActions("cart", ["fetchCartUser", "deleteCart"]),
        ...mapActions("order", ["updateOder", "fetchOderId", "deleteOder"]),
        loadOrder() {
            this.fetchOderId(this.currentUser.id).finally(this.dataOrder=this.oders)
        },
        getId(id) {
            this.dataOrder.id = id
        },

        deleteOrderFn() {
            if (confirm("Bạn có muốn xóa không?")) {
                this.deleteOder(this.dataOrder.id)
            }
        },
        updateOderFn() {
            // this.oders.forEach(oder =>console.log(oder.id))
            this.oders.forEach(oder => this.updateOder({id:oder.id, status: true}))
            this.$router.push({ path: "/" })
        },
    },
    created() {
        this.loadOrder();
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