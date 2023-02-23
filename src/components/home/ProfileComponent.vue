<template>
    <div class="container" style="margin-top: 160px;">
        <h3>Thông tin</h3>
        <form class="col-auto" @submit.prevent="updateProf">
            <div class="col-auto">
                <label for="full-name" class="form-label">Họ tên</label>
                <input type="text" :disabled="!isUpdate" :value="profileUser.fullName" @input="profileUser.fullName = $event.target.value" class="form-control"
                    id="full-name" placeholder="Họ tên">
            </div>
            <!-- <div class="col-auto">
                <label for="birthday" class="form-label">Ngày sinh</label>
                <input type="datetime-local" :disabled="!isUpdate" :value="profileUser.birthday" @input="profileUser.birthday = $event.target.value" class="form-control" id="birthday"
                    placeholder="Ngày sinh">
            </div>
            <div class="col-auto">
                <label for="gender" class="form-label">Giới tính</label>
                <select class="form-control" :disabled="!isUpdate" name="" id="gender">
                    <option value="1">Nam</option>
                    <option value="0">Nữ</option>
                </select>
            </div> -->
            <div class="col-auto">
                <label for="address" class="form-label">Địa chỉ</label>
                <input type="text" :disabled="!isUpdate" :value="profileUser.address" @input="profileUser.address = $event.target.value" class="form-control" id="address" placeholder="Địa chỉ">
            </div>
            <div class="col-auto">
                <label for="phone" class="form-label">Số điện thoại</label>
                <input type="text" :disabled="!isUpdate" :value="profileUser.phoneNumber" @input="profileUser.phoneNumber = $event.target.value" class="form-control" id="phone" placeholder="Số điện thoại">
            </div>
            <div class="col-auto">
                <label for="email" class="form-label">Email</label>
                <input type="email" :disabled="!isUpdate" :value="profileUser.email" @input="profileUser.email = $event.target.value" class="form-control" id="email" placeholder="Email">
            </div>

            <div class="col-auto mt-3 mb-3">
                <button @click="isUpdate = !isUpdate" class="btn btn-primary">Cập nhật</button>
                <router-link to="/change-password" class="btn btn-secondary ml-3">Đổi mật khẩu</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            isUpdate: false,
            profileUser: ''
        }
    },
    computed: {
        ...mapState("user", ["currentUser", "profile"])
    },
    methods: {
        ...mapActions("user", ["resetUser", "fetchProfile", "updateProfile"]),
        updateProf() {
            if(this.isUpdate){
                console.log(this.profileUser)
                console.log(this.updateProfile(this.profileUser))
            }
        }
    },
    created() {
        this.fetchProfile(this.currentUser.id).finally(this.profileUser = this.profile.resultObj)
    },
}
</script>

<style lang="scss" scoped>

</style>