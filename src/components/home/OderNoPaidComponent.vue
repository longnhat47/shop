<template>
    <div class="container">
        <table class="table table-striped" v-if="filterOder.length != 0">
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
                <tr v-for="oder in filterOder" :key="oder.id">
                    <td colspan="1" class="product-img">
                        <img src="https://www.shutterstock.com/image-vector/set-man-clothes-icons-thin-260nw-551698465.jpg"
                            alt="">
                    </td>
                    <td colspan="2">{{ oder.product }}</td>
                    <td colspan="1">{{ oder.quantity }}</td>
                    <td colspan="1">{{ oder.price.toLocaleString() }}đ</td>
                    <td colspan="1" style="width: 20px;" class="manage">
                        <div class="manage-btn">
                            <form @submit.prevent="deleteOrderFn()">
                                <button @click="getId(oder.id)" class="btn btn-danger"><i
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
        <span v-else class="h2">Chưa có đơn hàng nào <router-link to="/">mua ngay</router-link></span>
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
            this.oders.forEach(c => c.status == false ? total += c.totalPrice : total)
            return total
        },
        filterOder: function () {
            return this.oders.filter(function(o){
                return o.status === false
            } )
        }

    },
    methods: {
        ...mapActions("cart", ["fetchCartUser", "deleteCart"]),
        ...mapActions("order", ["updateOder", "fetchOderId", "deleteOder"]),
        loadOrder() {
            this.fetchOderId(this.currentUser.id).finally(this.dataOrder = this.oders)
        },
        getId(id) {
            this.dataOrder.id = id
            console.log(id)
            console.log(this.dataOrder.id)
        },
        addOrder(){
            setTimeout(() => {
                this.$router.push({ path: "/thanh-toan" })
            }, 1000)
        },
        deleteOrderFn() {
            if (confirm("Bạn có muốn xóa không?")) {
                this.deleteOder(this.dataOrder)
            }
        },
        updateOderFn() {
            this.orders.forEach(order => this.updateOder(order))
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