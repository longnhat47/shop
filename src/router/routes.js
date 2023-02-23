import HomeView from '@/views/home/HomeView.vue'
import LoginView from '@/views/authentication/LoginView.vue'
import RegisterView from '@/views/authentication/RegisterView.vue'
import RegisterSeller from '@/views/authentication/RegisterSeller.vue'
import ProfileView from '@/views/home/ProfileView.vue'
import ChangePassword from '@/views/home/ChangePasswordView.vue'
import ReviewView from '@/views/home/ReviewView.vue'
import Products from '@/views/home/ProductsView.vue'
import ProductDetail from '@/views/home/ProductDetailView.vue'
import CartView from '@/views/home/CartView.vue'
import OrderView from '@/views/home/OrderView.vue'
import PaymentView from '@/views/home/PaymentView.vue'

import AdminView from '@/views/admin/AdminView.vue'
import CategoryView from '@/views/admin/CategoryView.vue'
import ProductView from '@/views/admin/ProductView.vue'
import OrderViewAdmin from '@/views/admin/OderView.vue'
import UpdateProduct from '@/views/admin/UpdateProductView.vue'
import UserView from '@/views/admin/UserView.vue'
import UpdateUserView from '@/views/admin/UpdateUserView.vue'
import AnalysisView from '@/views/admin/AnalysisView.vue'


export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/dang-nhap',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/dang-ky',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/dang-ky-ban-hang',
    name: 'RegisterSeller',
    component: RegisterSeller,
  },
  {
    path: '/ca-nhan',
    name: 'Profile',
    component: ProfileView,
  },
  {
    path: '/change-password',
    name: 'ChangePassword',
    component: ChangePassword,
  },
  {
    path: '/product-detail/:id',
    name: 'ProductDetails',
    component: ProductDetail,
  },
  {
    path: '/products',
    name: 'Product',
    meta:{
      reload: true
    },
    component: Products,
  },
  {
    path: '/cart-detail',
    name: 'Cart',
    component: CartView,
  },
  {
    path: '/don-hang',
    name: 'Order',
    component: OrderView,
  },
  {
    path: '/danh-gia/:id',
    name: 'ReviewView',
    component: ReviewView,
  },
  {
    path: '/thanh-toan',
    name: 'Payment',
    component: PaymentView,
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView,
  },
  {
    path: '/admin/category',
    name: 'AdminCategory',
    component: CategoryView,
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: ProductView,
  },
  {
    path: '/admin/update-product/:id',
    name: 'UpdateProduct',
    component: UpdateProduct,
  },
  {
    path: '/admin/oders',
    name: 'OrderViewAdmin',
    component: OrderViewAdmin,
  },
  {
    path: '/admin/users',
    name: 'UserView',
    component: UserView,
  },
  {
    path: '/admin/update-users/:id',
    name: 'UpdateUserView',
    component: UpdateUserView,
  },
  {
    path: '/admin/analysis',
    name: 'AnalysisView',
    component: AnalysisView,
  }
  // {
  //   path: '/email-verify',
  //   name: 'Email Verify',
  //   component: EmailVerifyView,
  // },
  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: ProfileView,
  // },
  // {
  //   path: '/admin',
  //   name: 'Admin',
  //   component: () =>
  //   import('../views/admin/Dashboard.vue'),
  //   children: [
  //     {
  //       path: '/admin/dashboard',
  //       name: 'Dashboard',

  //       component: () =>
  //         import('../views/admin/Dashboard.vue'),
  //     },

  //   ],
  // },
]
