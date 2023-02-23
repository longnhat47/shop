import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
import user from './modules/user'
import category from './modules/category'
import product from './modules/product'
import cart from './modules/cart'
import order from './modules/order'
import color from './modules/color'
import size from './modules/size'
import review from './modules/review'

export default createStore({
  plugins: [createPersistedState()],
  // state: {
  //   token: null,
  //   countNoti: 0,
  // },
  // mutations: {
  //   setToken(state, token) {
  //     state.token = token;
  //   },
  //   add(state) {
  //     state.countNoti += 1;
  //   },
  //   subtract(state) {
  //     state.countNoti -= 1;
  //   },
  //   setCountNoti(state, count) {
  //     state.countNoti = count.count;
  //   },
  // },
  // actions: {
  //   nuxtServerInit({ commit }, { req }) {
  //     let token = null;
  //     if (req.headers.cookie) {
  //       const parsed = cookieparser.parse(req.headers.cookie);
  //       try {
  //         token = JSON.parse(parsed.token);
  //       } catch (err) {
  //         // No valid cookie found
  //       }
  //     }
  //     commit("setToken", token);
  //   },
  //   async setCountNoti({ commit }) {
  //     const count = await leaveService.countRequest();
  //     commit("setCountNoti", count);
  //   },
  // },
  // getters: {
  //   showNotification(state) {
  //     return state.countNoti;
  //   },
  // },
  modules: {
    user,
    category,
    product,
    order,
    cart,
    color,
    size,
    review
  },


})
