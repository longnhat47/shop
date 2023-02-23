<template>
    <div class="super_container">
        <header-component/>
        <product-detail></product-detail>
        <footer-component/>
    </div>
</template>

<script>
import HeaderComponent from '../../components/home/HeaderComponent.vue';
import ProductDetail from '../../components/home/ProductDetail.vue';
import FooterComponent from '../../components/home/FooterComponent.vue';
export default {
    data: function () {

    },
    components:{
        HeaderComponent,
        ProductDetail,
        FooterComponent
    }
    
}
</script>
<style scoped>
@import '@/assets/home/bootstrap4/bootstrap.min.css';


@import "@/assets/home/css/style.css";

@import "@/assets/home/plugins/OwlCarousel2-2.2.1/owl.carousel.css";
@import "@/assets/home/plugins/OwlCarousel2-2.2.1/owl.theme.default.css";
@import "@/assets/home/plugins/OwlCarousel2-2.2.1/animate.css";
@import "@/assets/home/css/responsive.css";
@import "@/assets/home/plugins/font-awesome-4.7.0/css/font-awesome.min.css";
</style>