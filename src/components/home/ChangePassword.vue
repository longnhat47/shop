<template>
    <div class="container" style="margin-top: 160px;">
        <h3>Đổi mật khẩu</h3>
        <form class="col-auto" @submit.prevent="updatePass">
            <div class="col-auto">
                <label for="current-pass" class="form-label">Mật khẩu hiện tại</label>
                <input type="password" v-model="formPass.currentPassword" class="form-control" id="current-pass" placeholder="Mật khẩu hiện tại">
            </div>
            <div class="col-auto">
                <label for="new-pass" class="form-label">Mật khẩu mới</label>
                <input type="password" v-model="formPass.newPassword" class="form-control" id="new-pass" placeholder="Mật khẩu mới">
            </div>
            <div class="col-auto">
                <label for="re-pass" class="form-label">Xác nhận lại mật khẩu</label>
                <input type="password" v-model="formPass.confirmPassword" class="form-control" id="re-pass" placeholder="Xác nhận lại mật khẩu">
            </div>

            <div class="col-auto mt-3 mb-3">
                <button class="btn btn-primary">Đổi mật khẩu</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            formPass: {
                id: '',
                currentPassword: "",
                newPassword: "",
                confirmPassword: ""
            }
        }
    },
    computed: {
        ...mapState("user", ["currentUser", "profile"])
    },
    methods: {
        ...mapActions("user", ["updatePassword"]),
        updatePass() {
                console.log(this.formPass)
                console.log(this.updatePassword(this.formPass))
        }
    },
    created() {
        this.formPass.id = this.currentUser.id
    },
}
</script>

<style lang="scss" scoped>

</style>