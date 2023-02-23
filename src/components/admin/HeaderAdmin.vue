<template>
	<div class="header row align-items-center" style="margin: 0;">
		<div class="logo col-1">
			<img style="height: 60px;" src="https://scontent.xx.fbcdn.net/v/t1.15752-9/322533587_680989490249957_6466881883750423566_n.png?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=7McFfU6W5ysAX_yN8xu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSGDJLGVstxx4PuArY6mp5TopZ7-mAiKpQ53Sq1IvQc7w&oe=63FF7903" alt="logo">
		</div>
		<div class="slidebar col-10 col ">
			<ul class="nav nav-pills align-items-center menu">
				<li class="nav-item">
					<router-link to='/' class="nav-link" :class="{active: btnActive === 'btn1' }" @click="btnActive = 'btn1'" >Trang chủ</router-link>
				</li>
				<li class="nav-item">
					<router-link to='/admin/category' class="nav-link" :class="{active: btnActive === 'btn2' }" @click="btnActive = 'btn2'" >Quản lý danh mục</router-link>
				</li>
				<li class="nav-item dropdown">
					<router-link to='/admin/product' class="nav-link" :class="{active: btnActive === 'btn3' }" @click="btnActive = 'btn3'" >Quản lý sản phẩm</router-link>

					<!-- <router-link to='/admin/product' class="nav-link dropdown-toggle" data-bs-toggle="dropdown" :class="{active: btnActive === 'btn1' }" @click="btnActive = 'btn1'" 
						role="button" aria-expanded="false">Quản lý sản phẩm</router-link> -->
					<!-- <ul class="dropdown-menu">
						<li><router-link to='/' class="dropdown-item" :class="{active: btnActive === 'btn1' }" @click="btnActive = 'btn1'" >Áo</router-link></li>
						<li><router-link to='/' class="dropdown-item" :class="{active: btnActive === 'btn1' }" @click="btnActive = 'btn1'" >Quần</router-link></li>
						<li><router-link to='/' class="dropdown-item" :class="{active: btnActive === 'btn1' }" @click="btnActive = 'btn1'" >Mũ</router-link></li>
						<li><router-link to='/' class="dropdown-item" :class="{active: btnActive === 'btn1' }" @click="btnActive = 'btn1'" >Phụ kiện</router-link></li>
					</ul> -->
				</li>
				<li class="nav-item">
					<router-link to='/admin/users' class="nav-link" :class="{active: btnActive === 'btn4' }" @click="btnActive = 'btn4'" >Quản lý tài khoản</router-link>
				</li>
				<li class="nav-item">
					<router-link to='/admin/oders' class="nav-link" :class="{active: btnActive === 'btn5' }" @click="btnActive = 'btn5'" >Quản lý đơn hàng</router-link>
				</li>
				<li class="nav-item">
					<router-link to='/admin/analysis' class="nav-link" :class="{active: btnActive === 'btn6' }" @click="btnActive = 'btn6'" >Thống kê</router-link>
				</li>
			</ul>
		</div>
		<div class="user-icon col-1">
			<ul class="nav nav-pills">
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
						aria-expanded="false">
						<img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="">
					</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">{{ currentUser.username}}</a></li>
						<li>
							<hr class="dropdown-divider">
						</li>
						<li><a class="dropdown-item" href="#" @click="logOut">Đăng xuất</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
	data(){
		return{
			btnActive:''
		}
	},
	computed: { 
        ...mapState("user", ["currentUser"])
	},
	methods: {
		...mapActions("user", ["resetUser", "resetProfile"]),
		logOut() {
			this.resetUser()
			this.resetProfile()
			localStorage.removeItem('token')
			this.$router.push({ path: "/dang-nhap" })
		}
	}
}
</script>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
	height: 70px;
	background-color: #fff;
	box-shadow: 0 0 25px rgb(0 0 0 / 10%);



}

.slidebar,
.menu {
	height: 100%;
}

.nav-link img {
	border: 0;
	height: 50px;
}

.nav-link {
	font-size: 18px;
	border-radius: 10px;
	width: 100%;
	height: 100%;
}

.nav-link:hover {
	font-size: 18px;
	border-radius: 10px;
}

.user-icon {
	height: 100%;
}
</style>