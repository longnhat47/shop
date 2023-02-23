<template>
    <div class="super_container">
        <header-component/>
        <manager-order/>
        <footer-component/>
    </div>
</template>

<script>
import HeaderComponent from '../../components/home/HeaderComponent.vue';
import ManagerOrder from '../../components/home/ManagerOrder.vue';
import FooterComponent from '../../components/home/FooterComponent.vue';
export default {
    data: function () {

    },
    components:{
        HeaderComponent,
        ManagerOrder,
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