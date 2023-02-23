<template>
    <!-- Header -->
    <header class="header trans_300">
        <!-- Top Navigation -->
        <div class="top_nav">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="top_nav_left">Thời trang online - Hotline: 0376054378(08h00 - 22h00)</div>
                    </div>
                    <div class="col-md-6 text-right">
                        <div class="top_nav_right">
                            <ul class="top_nav_menu">

                                <!-- Check / Language / My Account -->
                                <li class="check-bill">
                                    <router-link :to="{ path: `/don-hang`} ">
                                        Kiểm tra đơn hàng
                                    </router-link>
                                </li>
                                <!-- <li class="language">
                                    <a href="#">
                                        Ngôn ngữ
                                        <i class="fa fa-angle-down"></i>
                                    </a>
                                    <ul class="language_selection">
                                        <li><a href="#">Tiếng Anh</a></li>
                                        <li><a href="#">Tiếng Việt</a></li>
                                    </ul>
                                </li> -->
                                <li class="account">
                                    <a href="#" v-if="currentUser.username">
                                        {{ currentUser.username }}
                                        <i class="fa fa-angle-down"></i>
                                    </a>
                                    <a href="#" v-else>
                                        Tài khoản
                                        <i class="fa fa-angle-down"></i>
                                    </a>
                                    <ul class="account_selection">
                                        <li v-if="!currentUser.username">
                                            <router-link to="/dang-nhap">
                                                <i class="fa fa-sign-in" aria-hidden="true"></i>Đăng nhập
                                            </router-link>
                                        </li>
                                        <li v-if="!currentUser.username">
                                            <router-link to="/dang-ky">
                                                <i class="fa fa-user-plus" aria-hidden="true"></i>Đăng ký
                                            </router-link>
                                        </li>
                                        <li v-if="currentUser.username">
                                            <router-link :to="{path:`/ca-nhan/`}">
                                                <i class="fa fa-user" aria-hidden="true"></i>Cá nhân
                                            </router-link>
                                        </li>
                                        <li v-if="currentUser.username">
                                            <router-link to="" @click="logOut">
                                                <i class="fa fa-sign-out" aria-hidden="true"></i>Đăng xuất
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="cart">
                                    <router-link to="cart-detail">
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABhklEQVRIie3Vv0rDUBTH8e9p7TM4KIjgMyhoqTiIYkWwQh6hkw/g4Fu42EkoDg5qKTQqVQRpLMXJyVVEQRd1qFi0TY6DLf4LTUuSDupvujmc8Mm5uSTw1yIAhV2rJBBv1q4UWZlPTWyFCUdcakOCbh7kyyNhwj9i5k6z5q6lZq60GqbzY2J1dPt9Icmews925BCoAaP5fKW/Z7BhjNeAEyASs+szYcHiVtzLWcuqrIXglZKpeALcTzWNqG2GgAI63Fq5wgsLk5fARfCuHLWFmwlj6kNPWHCChhW7fuwJPzXuLOAhMFY4TxpTd56wYRg28rE1vl2V4ufrdu8YHA1su0XsL0O0haN21ATsANxatd5X7hieNcYfBM4CgE+aX8TOYACUQgBw8XvBE47gbABVH+jjC7Fs1/DsUuLWQWaAClDvAnxVsFR0OpUau+/ivl8a19+iWwo7p0kRzYCqiKTnFuP7fvq8T3XrCcVZBwZABlXJ+O3rGA46XUwsadAb4Bo07bfvPz3LGzgRim+TG+qIAAAAAElFTkSuQmCC">
                                        <span id="checkout_items" v-if="carts.length > 0" class="checkout_items">{{ carts.length }}</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Navigation -->
        <div class="main_nav_container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-right">
                        <div class="logo_container">
                            <router-link to="/"><img class="logo" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/322533587_680989490249957_6466881883750423566_n.png?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7McFfU6W5ysAX_yN8xu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSGDJLGVstxx4PuArY6mp5TopZ7-mAiKpQ53Sq1IvQc7w&oe=63FF7903"></router-link>
                        </div>
                        <nav class="navbar">
                            <ul class="navbar_menu">
                                <li><a class="hover-underline-animation" @click="goToProduct">
                                        Tất cả sản phẩm
                                    </a></li>
                                <li class="category"><a class="hover-underline-animation" href="#">Danh mục
                                        <i class="fa fa-angle-down"></i></a>
                                    <ul class="category_selection">
                                        <li v-for="cate in categories" :key="cate.id">
                                            <a @click="goToCategory(cate.name)">{{ cate.name }}</a>
                                        </li>
                                    </ul>
                                </li>
                                <!-- <li><a class="hover-underline-animation" href="#">Hàng mới</a></li> -->
                                <li>
                                    <form class="form-search">
                                        <input type="text" name="search" class="search" v-model="filterSearch" placeholder="Tìm kiếm..">
                                        <button @click="search"><i class="fa fa-search"></i></button>
                                    </form>
                                </li>
                                <!-- <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i></a></li> -->
                            </ul>
                            <div class="hamburger_container">
                                <i class="fa fa-bars" aria-hidden="true"></i>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>

    </header>

</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    data(){
        return{
            filterSearch: '',
        }
    },
    computed: { 
        ...mapState("cart", ["carts"]),
        ...mapState("category", ["categories"]),
        ...mapState("user", ["currentUser"])
 },
    methods: {
        ...mapActions("category", ["fetchCategory"]),
        ...mapActions("user", ["resetUser", "resetProfile"]),
        ...mapActions("cart", ["fetchCartUser"]),
        logOut(){
            this.resetUser()
            this.resetProfile()
            localStorage.removeItem('token')
            this.$router.push({path: "/dang-nhap"})
            
        },
        search(){
            this.$router.push({path: "/products", query:{ search: this.filterSearch}})
        },
        goToCategory(cate){
            window.location.assign(this.$router.resolve({ name: 'Product', query: {category:cate}} ).href)
            // this.$router.push({ name: 'Product', query: {category:cate}} )
        },
        goToProduct(){
            window.location.assign(this.$router.resolve({ name: 'Product'} ).href)
        }
    },
    created() {
        this.fetchCategory();
        this.fetchCartUser(this.currentUser.id)
    },
}
</script>

<style lang="scss" scoped>
.account_selection,
.category_selection,
.language_selection {
    padding-left: 0;
}
.logo {
    height: 80px;
}
.account{
    min-width: 120px;
}
</style>
