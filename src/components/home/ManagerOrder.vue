<template>
    <div class="container cart-view">
        <h3>Đơn hàng</h3>
        <ul class="nav nav-pills align-items-center menu">
            <li class="nav-item menu-oder-option" style="
            border: 1px solid #ccc;
            border-radius: 10px; margin: 1px;"><button class="nav-link menu-oder-btn" @click="isSelected = 'OderNoPaid';btnActive = 'btn1'" :class="{active: btnActive === 'btn1' }">Chưa thanh toán</button></li>
            <li class="nav-item menu-oder-option" style="
            border: 1px solid #ccc;
            border-radius: 10px; margin: 1px;"><button class="nav-link menu-oder-btn" @click="isSelected = 'OderPaid';btnActive = 'btn2'" :class="{active: btnActive === 'btn2' }">Đã thanh toán</button></li>
        </ul>
        <component :is="isSelected"></component>
    </div>
</template>

<script>
/* eslint-disable */ 
import { mapActions, mapState, mapGetters } from "vuex";
import OderPaid from "@/components/home/OrderPaidComponent.vue"
import OderNoPaid from "@/components/home/OderNoPaidComponent.vue"
export default {
    data() {
        return {
            isSelected: 'OderNoPaid',
            total: 0,
            dataOrder: '',
            btnActive:'btn1'
        }
    },
    components:{
        OderNoPaid,
        OderPaid
    },
    computed: {
        ...mapState("cart", ["carts"]),
        ...mapState("order", ["oders"]),
        ...mapGetters("order", ["getOrders"]),
        ...mapState("user", ["currentUser"]),
        totalPrice() {
            let total = 0;
            // this.carts.forEach(c => total += c.toTal)
            this.oders.forEach(c => total += c.totalPrice)
            return total
        },

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
    .menu-oder{
        .menu-oder-option{
            .menu-oder-btn{
                font-size: 16px;
            }
        }

    }
</style>