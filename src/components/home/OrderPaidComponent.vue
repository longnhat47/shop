<template>
    <div class="container">
        <table class="table table-striped" v-if="filterOder">
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
                        <td colspan="1"><router-link :to="{name:'ReviewView', params:{id: oder.id}}" class="btn btn-primary">Đánh giá</router-link></td>
                    </tr>
                </tbody>
            </table>
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
        ...mapState("order", ["oders"]),
        ...mapGetters("order", ["getOrders"]),
        ...mapState("user", ["currentUser"]),
        filterOder: function() {
            return this.oders.filter(o => o.status === true)
        }
    },
    methods: {
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

        .product-img img{
            height: 60px;
        }
    }
</style>