<template>
    
    <div class="container-fluid" style="padding: 0;">
        <div class="row">
            <header-admin></header-admin>
        </div>
        <div class="row" style="margin-top: 70px;">
            <div class="col-10 m-auto">
                <manage-user/>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderAdmin from "@/components/admin/HeaderAdmin.vue";
import ManageUser from "@/components/admin/user/ManageUser.vue";
export default {
    components: {
        HeaderAdmin,
        ManageUser,
    },
    methods: {
    }

}
</script>


<style scoped>

</style>
