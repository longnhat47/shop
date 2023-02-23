<template>
    <div class="container" style="margin-top: 160px;">
        <h3>Đánh giá</h3>
        <form class="col-auto" @submit.prevent="addReview">
            <div class="col-auto">
                <label for="content" class="form-label">Nội dung</label>
                <textarea  type="text" v-model="formReview.content" class="form-control" id="content" placeholder="Nhập nội dung" rows="3"></textarea>
            </div>

            <div class="col-auto mt-3 mb-3">
                <button class="btn btn-primary">Đánh giá</button>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
    data() {
        return {
            formReview: {
                productId: '',
                content: '',
            }
        }
    },
    computed: {
        ...mapState("user", ["currentUser", "profile"])
    },
    methods: {
        ...mapActions("review", ["createReview"]),
        addReview() {
                console.log(this.formReview)
                console.log(this.createReview(this.formReview))
        }
    },
    created() {
        this.formReview.productId = this.$route.params.id
    },
}
</script>

<style lang="scss" scoped>

</style>