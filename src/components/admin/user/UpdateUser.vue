<template>
    <div class="container mt-2">
        <h3>Cập nhật <span style="color: #0d6efd">{{ profile.resultObj.userName }}</span></h3>
    <form @submit.prevent="updateUser">
        <div class="mb-3">
            <label for="user-name" class="form-label">Họ và tên</label>
            <input type="text" :value="profile.resultObj.fullName"
                @input="profile.resultObj.fullName = $event.target.value" id="user-name" class="form-control">
            <label for="user-phone" class="form-label">Số điện thoại</label>
            <input type="text" :value="profile.resultObj.phoneNumber"
                @input="profile.resultObj.phoneNumber = $event.target.value" id="user-phone" class="form-control">
            <label for="user-addr" class="form-label">Họ và tên</label>
            <input type="text" :value="profile.resultObj.address"
                @input="profile.resultObj.address = $event.target.value" id="user-addr" class="form-control">
        </div>

        <button type="submit" class="btn btn-primary">Sửa</button>
    </form>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex"

export default {
    data() {
        return {
            dataUpdate: {
                id: "",
                fullName: "",
                phoneNumber: "",
                address: ""
            },
            imgEvn: 'http://localhost:5187'
        };
    },
    computed: {
        ...mapState("user", ["profile"])
    },
    methods: {
        ...mapActions("user", ["fetchProfile", "updateProfile"]),
        
        async updateUser() {
            let res = await this.updateProfile({
                id: this.profile.resultObj.id,
                fullName: this.profile.resultObj.fullName,
                phoneNumber: this.profile.resultObj.phoneNumber,
                address: this.profile.resultObj.address,
            })
            if(res == "Update success"){
                alert('Cập nhật thành công')
                this.$router.push({ path: "/admin/users" })
            }
        },
        resetForm() {
            this.dataUpdate = {
                id: "",
                fullName: "",
                phoneNumber: "",
                address: ""
            };
        }
    },
    created() {
        this.fetchProfile(this.$route.params.id);
    }
}
</script>

<style>

</style>