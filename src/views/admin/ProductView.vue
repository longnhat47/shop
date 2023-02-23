<template>
    
    <div class="container-fluid" style="padding: 0;">
        <div class="row">
            <header-admin></header-admin>
        </div>
        <div class="row" style="margin-top: 70px;">
            <div class="col-10 m-auto">
                <manage-product/>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderAdmin from "@/components/admin/HeaderAdmin.vue";
import ManageProduct from "@/components/admin/products/ManageProduct.vue";
export default {
    components: {
        HeaderAdmin,
        ManageProduct,
    },
    methods: {
    }

}
</script>


<style scoped>

</style>
