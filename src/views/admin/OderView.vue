<template>
    
    <div class="container-fluid" style="padding: 0;">
        <div class="row">
            <header-admin></header-admin>
        </div>
        <div class="row" style="margin-top: 70px;">
            <div class="col-10 m-auto">
                <manage-order/>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderAdmin from "@/components/admin/HeaderAdmin.vue";
import ManageOrder from "@/components/admin/order/ManageOrder.vue";
export default {
    components: {
        HeaderAdmin,
        ManageOrder,
    },
    methods: {
    }

}
</script>


<style scoped>

</style>
