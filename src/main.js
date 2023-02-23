import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'


import Antd from 'ant-design-vue';
// import App from './App';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);
app.use(Antd);
app.use(router);
app.use(store);
app.use(VueAxios, axios);
app.mount('#app');

